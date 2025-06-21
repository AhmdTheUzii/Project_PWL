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

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username dan password wajib diisi' });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Hash password dengan MD5
    const hashedPassword = md5(password);
    
    // Query untuk mencari user
    const [rows] = await connection.execute(
      'SELECT * FROM admin WHERE username = ? AND password = ?',
      [username, hashedPassword]
    );

    await connection.end();

    if (rows.length > 0) {
      const user = rows[0];
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
      return res.status(401).json({ success: false, message: 'Username atau password salah' });
    }
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ success: false, message: 'Terjadi kesalahan server' });
  }
} 