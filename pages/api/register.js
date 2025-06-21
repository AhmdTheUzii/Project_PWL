import md5 from 'md5';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_users',
  charset: 'utf8'
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Semua field wajib diisi.' });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Cek apakah username sudah ada
    const [existingUsers] = await connection.execute(
      'SELECT * FROM admin WHERE username = ? OR email = ?',
      [username, email]
    );

    if (existingUsers.length > 0) {
      await connection.end();
      return res.status(409).json({ message: 'Username atau email sudah terdaftar.' });
    }

    // Hash password dengan MD5
    const hashedPassword = md5(password);
    
    // Insert user baru
    const [result] = await connection.execute(
      'INSERT INTO admin (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    await connection.end();
    
    return res.status(201).json({ 
      message: 'Register berhasil!',
      userId: result.insertId
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan server' });
  }
} 