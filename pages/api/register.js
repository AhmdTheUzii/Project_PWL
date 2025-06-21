import md5 from 'md5';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'db_users',
  charset: 'utf8',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password, confirmPassword } = req.body;

  // Validasi input
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ 
      success: false,
      message: 'Semua field wajib diisi' 
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ 
      success: false,
      message: 'Password dan konfirmasi password tidak cocok' 
    });
  }

  if (password.length < 6) {
    return res.status(400).json({ 
      success: false,
      message: 'Password minimal 6 karakter' 
    });
  }

  // Validasi email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false,
      message: 'Format email tidak valid' 
    });
  }

  try {
    const pool = mysql.createPool(dbConfig);
    
    // Cek apakah username sudah ada
    const [existingUsers] = await pool.execute(
      'SELECT id FROM admin WHERE username = ? OR email = ?',
      [username, email]
    );

    if (existingUsers.length > 0) {
      await pool.end();
      return res.status(400).json({ 
        success: false,
        message: 'Username atau email sudah terdaftar' 
      });
    }

    // Hash password
    const hashedPassword = md5(password);
    
    // Insert user baru
    const [result] = await pool.execute(
      'INSERT INTO admin (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    await pool.end();

    return res.status(201).json({ 
      success: true,
      message: 'Registrasi berhasil! Silakan login.',
      user: {
        id: result.insertId,
        username,
        email
      }
    });

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Terjadi kesalahan server. Silakan coba lagi nanti.' 
    });
  }
} 