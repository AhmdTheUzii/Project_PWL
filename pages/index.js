import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Password tidak cocok!');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Registrasi berhasil! Anda akan diarahkan ke halaman login.');
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        setError(data.message || 'Registrasi gagal');
      }
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Register - Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="register-container">
        <div className="bg-animation">
          <div className="bg-particle bg-particle-1"></div>
          <div className="bg-particle bg-particle-2"></div>
          <div className="bg-particle bg-particle-3"></div>
        </div>

        <div className="register-card">
          <div className="register-header">
            <div className="header-icon">
              <i className="fas fa-user-plus"></i>
            </div>
            <h1>Join Our Community</h1>
            <p>Buat akun baru untuk mengakses portfolio kami.</p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="input-group">
              <label>
                <i className="fas fa-user"></i>
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Masukkan username Anda"
              />
            </div>

            <div className="input-group">
              <label>
                <i className="fas fa-envelope"></i>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Masukkan email Anda"
              />
            </div>

            <div className="input-group">
              <label>
                <i className="fas fa-lock"></i>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Masukkan password Anda"
              />
            </div>
            
            <div className="input-group">
              <label>
                <i className="fas fa-check-circle"></i>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Konfirmasi password Anda"
              />
            </div>

            <button type="submit" disabled={loading} className="register-button">
              {loading ? <span className="spinner"></span> : 'Create Account'}
            </button>
          </form>

          {error && <p className="message error-message">{error}</p>}
          {success && <p className="message success-message">{success}</p>}
          
          <div className="login-link">
            <p>Sudah punya akun? <span onClick={() => router.push('/login')}>Login di sini</span></p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .register-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 20px;
        }

        .bg-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .bg-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%);
          animation: float 10s ease-in-out infinite;
        }
        .bg-particle-1 {
          width: 200px; height: 200px; top: 10%; right: 15%; animation-duration: 7s;
        }
        .bg-particle-2 {
          width: 150px; height: 150px; bottom: 15%; left: 10%; animation-duration: 9s; animation-direction: reverse;
        }
        .bg-particle-3 {
          width: 100px; height: 100px; top: 60%; right: 5%; animation-duration: 11s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        .register-card {
          background-color: rgba(31, 41, 55, 0.85);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(249, 115, 22, 0.2);
          width: 100%;
          max-width: 450px;
          position: relative;
          z-index: 2;
          border: 1px solid rgba(249, 115, 22, 0.3);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .register-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .header-icon {
          width: 70px;
          height: 70px;
          background-color: #f97316;
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.5);
          animation: pulse 2s infinite;
        }

        .header-icon i {
          font-size: 30px;
          color: white;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.4); }
          50% { box-shadow: 0 0 45px rgba(249, 115, 22, 0.7); }
          100% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.4); }
        }

        .register-header h1 {
          color: white;
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 8px;
          text-shadow: 0 2px 10px rgba(249, 115, 22, 0.3);
        }

        .register-header p {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }

        .register-form {
          margin-bottom: 24px;
        }
        
        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          color: #d1d5db;
          font-size: 14px;
          font-weight: 500;
        }
        
        .input-group label i {
          margin-right: 8px;
          color: #f97316;
        }

        .input-group input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 2px solid rgba(249, 115, 22, 0.3);
          background-color: rgba(17, 24, 39, 0.8);
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .input-group input:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
        }
        
        .input-group input::placeholder {
          color: #6b7280;
        }
        
        .register-button {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background-color: #f97316;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .register-button:hover:not(:disabled) {
          background-color: #fb923c;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
        }

        .register-button:disabled {
          background-color: #9ca3af;
          cursor: not-allowed;
        }
        
        .message {
          text-align: center;
          margin: 20px 0 0;
          padding: 10px;
          border-radius: 8px;
          font-weight: 500;
        }
        
        .error-message {
          color: #fca5a5;
          background-color: rgba(239, 68, 68, 0.2);
        }

        .success-message {
          color: #86efac;
          background-color: rgba(34, 197, 94, 0.2);
        }
        
        .login-link {
          text-align: center;
          margin-top: 24px;
          color: #9ca3af;
          font-size: 14px;
        }
        
        .login-link span {
          color: #f97316;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        
        .login-link span:hover {
          color: #fb923c;
          text-decoration: underline;
        }
        
        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        /* Responsive Styles */
        @media (max-width: 480px) {
          .register-card {
            padding: 25px;
          }
          .register-header h1 {
            font-size: 24px;
          }
          .header-icon {
            width: 60px;
            height: 60px;
          }
          .header-icon i {
            font-size: 26px;
          }
          .input-group input {
            padding: 10px 14px;
          }
          .register-button {
            padding: 12px;
          }
        }
      `}</style>
    </>
  );
}