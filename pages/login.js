import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/dashboard');
      } else {
        setError(data.message || 'Login gagal');
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
        <title>Login - Portfolio Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="login-container">
        {/* Animated Background Elements */}
        <div className="bg-float-1"></div>
        <div className="bg-float-2"></div>
        <div className="bg-float-3"></div>

        {/* Main Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="header-icon-container">
              <i className="fas fa-user header-icon"></i>
            </div>
            <h1 className="header-title">
              Welcome Back
            </h1>
            <p className="header-subtitle">
              Masuk ke akun portfolio Anda
            </p>
          </div>

          {/* Input Fields */}
          <div style={{ marginBottom: '20px' }}>
            <label className="input-label">
              <i className="fas fa-user input-icon"></i>
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Masukkan username Anda"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label className="input-label">
              <i className="fas fa-lock input-icon"></i>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Masukkan password Anda"
            />
          </div>

          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-triangle"></i>
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" disabled={loading} className="login-button">
            {loading ? (
              <div className="loader"></div>
            ) : (
              <>
                <i className="fas fa-sign-in-alt" style={{ marginRight: '8px' }}></i>
                Login
              </>
            )}
          </button>
          
          {/* Register Link */}
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
              Belum punya akun?{' '}
              <a href="/register" className="register-link">
                Daftar sekarang
              </a>
            </p>
          </div>
        </form>
      </div>
      <style jsx>{`
        .login-container {
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
        .login-form {
          background-color: rgba(31, 41, 55, 0.9);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(249, 115, 22, 0.2);
          width: 100%;
          max-width: 400px;
          position: relative;
          z-index: 2;
          border: 1px solid rgba(249, 115, 22, 0.3);
          backdrop-filter: blur(10px);
        }
        .header-icon-container {
          width: 80px;
          height: 80px;
          background-color: #f97316;
          border-radius: 50%;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.5);
          animation: pulse 2s infinite;
        }
        .header-icon {
          font-size: 32px;
          color: white;
        }
        .header-title {
          color: white;
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(249, 115, 22, 0.3);
        }
        .header-subtitle {
          color: #9ca3af;
          font-size: 14px;
          margin: 0;
        }
        .input-label {
          display: block;
          margin-bottom: 8px;
          color: #d1d5db;
          font-size: 14px;
          font-weight: 500;
        }
        .input-icon {
          margin-right: 8px;
          color: #f97316;
        }
        .input-field {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 2px solid rgba(249, 115, 22, 0.3);
          background-color: rgba(17, 24, 39, 0.8);
          color: white;
          font-size: 14px;
          transition: all 0.3s ease;
          box-sizing: border-box;
          backdrop-filter: blur(5px);
        }
        .input-field:focus {
          border-color: #f97316;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.3);
          outline: none;
        }
        .error-message {
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #fca5a5;
          padding: 12px;
          border-radius: 8px;
          margin-bottom: 20px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .login-button {
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
          box-shadow: 0 8px 30px rgba(249, 115, 22, 0.3);
        }
        .login-button:hover:not(:disabled) {
          background-color: #fb923c;
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(249, 115, 22, 0.4);
        }
        .login-button:disabled {
          background-color: #4b5563;
          cursor: not-allowed;
        }
        .loader {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .register-link {
          color: #f97316;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .register-link:hover {
          color: #fb923c;
          text-decoration: underline;
        }
        
        /* Background Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.5); }
          50% { box-shadow: 0 0 45px rgba(249, 115, 22, 0.7); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .bg-float-1 {
          position: absolute; top: 10%; left: 10%; width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%);
          border-radius: 50%; animation: float 6s ease-in-out infinite; z-index: 1;
        }
        .bg-float-2 {
          position: absolute; bottom: 20%; right: 15%; width: 150px; height: 150px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
          border-radius: 50%; animation: float 8s ease-in-out infinite reverse; z-index: 1;
        }
        .bg-float-3 {
          position: absolute; top: 50%; left: 5%; width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%);
          border-radius: 50%; animation: float 10s ease-in-out infinite; z-index: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 480px) {
          .login-form {
            padding: 24px;
          }
          .header-icon-container {
            width: 60px;
            height: 60px;
          }
          .header-icon {
            font-size: 24px;
          }
          .header-title {
            font-size: 24px;
          }
          .login-button {
            padding: 12px;
            font-size: 14px;
          }
          .bg-float-1 { display: none; }
          .bg-float-2 { bottom: 10%; right: 5%; width: 100px; height: 100px; }
          .bg-float-3 { top: 5%; left: -10%; width: 120px; height: 120px;}
        }
      `}</style>
    </>
  );
} 