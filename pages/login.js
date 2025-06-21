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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite',
          zIndex: 1
        }}></div>

        {/* Main Login Container */}
        <div style={{
          backgroundColor: 'rgba(31, 41, 55, 0.9)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(249, 115, 22, 0.2)',
          width: '100%',
          maxWidth: '400px',
          position: 'relative',
          zIndex: 2,
          border: '1px solid rgba(249, 115, 22, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f97316',
              borderRadius: '50%',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)',
              animation: 'pulse 2s infinite'
            }}>
              <i className="fas fa-user" style={{ fontSize: '32px', color: 'white' }}></i>
            </div>
            <h1 style={{
              color: 'white',
              fontSize: '28px',
              fontWeight: '600',
              marginBottom: '8px',
              textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
            }}>
              Welcome Back
            </h1>
            <p style={{
              color: '#9ca3af',
              fontSize: '14px',
              margin: 0
            }}>
              Masuk ke akun portfolio Anda
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} style={{ marginBottom: '24px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#d1d5db',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                <i className="fas fa-user" style={{ marginRight: '8px', color: '#f97316' }}></i>
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '2px solid rgba(249, 115, 22, 0.3)',
                  backgroundColor: 'rgba(17, 24, 39, 0.8)',
                  color: 'white',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  backdropFilter: 'blur(5px)'
                }}
                placeholder="Masukkan username Anda"
                onFocus={(e) => {
                  e.target.style.borderColor = '#f97316';
                  e.target.style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(249, 115, 22, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                color: '#d1d5db',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                <i className="fas fa-lock" style={{ marginRight: '8px', color: '#f97316' }}></i>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '2px solid rgba(249, 115, 22, 0.3)',
                  backgroundColor: 'rgba(17, 24, 39, 0.8)',
                  color: 'white',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  backdropFilter: 'blur(5px)'
                }}
                placeholder="Masukkan password Anda"
                onFocus={(e) => {
                  e.target.style.borderColor = '#f97316';
                  e.target.style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(249, 115, 22, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {error && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#fca5a5',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '20px',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <i className="fas fa-exclamation-triangle"></i>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#f97316',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.target.style.backgroundColor = '#ea580c';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.target.style.backgroundColor = '#f97316';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(249, 115, 22, 0.3)';
                }
              }}
            >
              {loading ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderTop: '2px solid white',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  Loading...
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <i className="fas fa-sign-in-alt"></i>
                  Login
                </div>
              )}
            </button>
          </form>

          {/* Register Link */}
          <div style={{ textAlign: 'center' }}>
            <p style={{
              color: '#9ca3af',
              fontSize: '14px',
              margin: '0 0 16px 0'
            }}>
              Belum punya akun?
            </p>
            <a
              href="/register"
              style={{
                color: '#f97316',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ea580c';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-user-plus"></i>
              Daftar Sekarang
            </a>
          </div>

          {/* Social Login Options */}
          <div style={{
            marginTop: '32px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(249, 115, 22, 0.2)'
          }}>
            <p style={{
              color: '#9ca3af',
              fontSize: '12px',
              textAlign: 'center',
              margin: '0 0 16px 0'
            }}>
              Atau login dengan
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center'
            }}>
              <button style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                backgroundColor: 'rgba(17, 24, 39, 0.8)',
                color: '#f97316',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f97316';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-google"></i>
              </button>
              <button style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                backgroundColor: 'rgba(17, 24, 39, 0.8)',
                color: '#f97316',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f97316';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-facebook-f"></i>
              </button>
              <button style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                backgroundColor: 'rgba(17, 24, 39, 0.8)',
                color: '#f97316',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f97316';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(17, 24, 39, 0.8)';
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          input::placeholder {
            color: #6b7280;
          }
          
          input:focus {
            outline: none;
          }
        `}</style>
      </div>
    </>
  );
} 