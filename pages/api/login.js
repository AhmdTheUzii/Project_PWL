import md5 from 'md5';
import mysql from 'mysql2/promise';

// Konfigurasi database - untuk produksi, gunakan environment variables
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'db_users',
  charset: 'utf8',
  // Tambahkan connection pooling untuk performa yang lebih baik
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Simple rate limiting (untuk produksi, gunakan Redis atau database)
const loginAttempts = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  // Validasi input
  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi' });
  }

  // Rate limiting sederhana
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const attempts = loginAttempts.get(clientIP) || 0;
  
  if (attempts >= 5) {
    return res.status(429).json({ 
      success: false, 
      message: 'Terlalu banyak percobaan login. Silakan coba lagi dalam 15 menit.' 
    });
  }

  try {
    // Buat connection pool
    const pool = mysql.createPool(dbConfig);
    
    // Hash password dengan MD5 (untuk sementara, sebaiknya gunakan bcrypt)
    const hashedPassword = md5(password);
    
    // Query untuk mencari user
    const [rows] = await pool.execute(
      'SELECT id, username, email FROM admin WHERE username = ? AND password = ?',
      [username, hashedPassword]
    );

    await pool.end();

    if (rows.length > 0) {
      const user = rows[0];
      
      // Reset login attempts jika berhasil
      loginAttempts.delete(clientIP);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Login berhasil!',
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      });
    } else {
      // Increment login attempts jika gagal
      loginAttempts.set(clientIP, attempts + 1);
      
      // Reset attempts setelah 15 menit
      setTimeout(() => {
        loginAttempts.delete(clientIP);
      }, 15 * 60 * 1000);
      
      return res.status(401).json({ 
        success: false, 
        message: 'Username atau password salah' 
      });
    }
  } catch (error) {
    console.error('Database error:', error);
    
    // Jangan expose detail error ke client
    return res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan server. Silakan coba lagi nanti.' 
    });
  }
} 