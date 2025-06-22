import { createServerSupabaseClient } from '../../lib/supabase';
import bcrypt from 'bcrypt';

// Simple rate limiting
const registrationAttempts = new Map();
const SALT_ROUNDS = 10; // Standard practice for bcrypt

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'Username, email, dan password wajib diisi' });
  }
  if (password.length < 8) {
    return res.status(400).json({ success: false, message: 'Password minimal harus 8 karakter' });
  }

  // Rate limiting
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const attempts = registrationAttempts.get(clientIP) || 0;
  if (attempts >= 10) {
    return res.status(429).json({ success: false, message: 'Terlalu banyak percobaan registrasi. Coba lagi nanti.' });
  }

  try {
    const supabase = createServerSupabaseClient();

    // Check if username or email already exists
    const { data: existingUser, error: existingUserError } = await supabase
      .from('admin')
      .select('id')
      .or(`username.eq.${username},email.eq.${email}`)
      .limit(1);

    if (existingUserError) {
      console.error('Supabase check user error:', existingUserError);
      return res.status(500).json({ success: false, message: 'Kesalahan server saat memeriksa data.' });
    }

    if (existingUser && existingUser.length > 0) {
      return res.status(409).json({ success: false, message: 'Username atau email sudah terdaftar.' });
    }

    // Hash password with bcrypt
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Insert new user into Supabase
    const { data, error } = await supabase
      .from('admin')
      .insert([{ 
        username, 
        email, 
        password: hashedPassword 
      }])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ success: false, message: 'Gagal mendaftarkan pengguna baru.' });
    }

    registrationAttempts.set(clientIP, attempts + 1);
    setTimeout(() => registrationAttempts.delete(clientIP), 15 * 60 * 1000);

    return res.status(201).json({ 
      success: true, 
      message: 'Registrasi berhasil!',
      user: data ? { id: data[0].id, username: data[0].username, email: data[0].email } : null
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ success: false, message: 'Terjadi kesalahan server internal.' });
  }
} 