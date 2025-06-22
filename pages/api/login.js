import { createServerSupabaseClient } from '../../lib/supabase';
import bcrypt from 'bcrypt';

// Simple rate limiting (in-memory, reset on server restart)
const loginAttempts = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // Input validation
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username dan password wajib diisi' });
  }

  // Rate limiting
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const attempts = loginAttempts.get(clientIP) || 0;
  
  if (attempts >= 5) {
    // Block requests after 5 failed attempts
    return res.status(429).json({ 
      success: false, 
      message: 'Terlalu banyak percobaan login. Coba lagi dalam 15 menit.' 
    });
  }

  try {
    const supabase = createServerSupabaseClient();
    
    // Find user by username in Supabase
    const { data: users, error } = await supabase
      .from('admin')
      .select('id, username, email, password')
      .eq('username', username)
      .limit(1);

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Terjadi kesalahan pada server. Coba lagi nanti.' 
      });
    }

    const user = users && users.length > 0 ? users[0] : null;

    if (user) {
      // Compare submitted password with stored hash
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Successful login
        loginAttempts.delete(clientIP); // Reset attempts on success
        
        return res.status(200).json({ 
          success: true, 
          message: 'Login berhasil!',
          user: {
            id: user.id,
            username: user.username,
            email: user.email
          }
        });
      }
    }
    
    // Failed login (user not found or password incorrect)
    loginAttempts.set(clientIP, attempts + 1);
    
    // Set a timeout to clear the attempt count after 15 minutes
    setTimeout(() => {
      loginAttempts.delete(clientIP);
    }, 15 * 60 * 1000);
    
    return res.status(401).json({ 
      success: false, 
      message: 'Username atau password salah' 
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan internal pada server. Coba lagi nanti.' 
    });
  }
} 