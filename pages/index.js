import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio Website - Home</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
        fontFamily: 'Poppins, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite',
          zIndex: 1
        }}></div>

        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          backdropFilter: 'blur(10px)',
          zIndex: 50,
          padding: '20px 0',
          borderBottom: '1px solid rgba(249, 115, 22, 0.2)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#f97316',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)'
              }}>
                <i className="fas fa-code" style={{ color: 'white', fontSize: '18px' }}></i>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
              }}>
                Portfolio
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center'
            }}>
              <a href="#home" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
              }}>
                Home
              </a>
              <a href="#about" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
              }}>
                About
              </a>
              <a href="#features" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
              }}>
                Features
              </a>
              <a href="#contact" style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
              }}>
                Contact
              </a>
              <button
                onClick={() => router.push('/login')}
                style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ea580c';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f97316';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(249, 115, 22, 0.3)';
                }}
              >
                <i className="fas fa-sign-in-alt" style={{ marginRight: '8px' }}></i>
                Login
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" style={{
          paddingTop: '120px',
          paddingBottom: '80px',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: '64px',
              fontWeight: 'bold',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
              lineHeight: '1.2'
            }}>
              Welcome to Our
              <br />
              <span style={{ color: 'white' }}>Portfolio Website</span>
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#9ca3af',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Jelajahi karya-karya terbaik kami dalam pengembangan web, desain, dan konten kreatif yang menggabungkan teknologi modern dengan budaya Indonesia
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => router.push('/register')}
                style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ea580c';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f97316';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(249, 115, 22, 0.3)';
                }}
              >
                <i className="fas fa-rocket"></i>
                Get Started
              </button>
              <button
                onClick={() => router.push('/dashboard')}
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  border: '2px solid #f97316',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f97316';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fas fa-eye"></i>
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          padding: '80px 0',
          backgroundColor: 'rgba(31, 41, 55, 0.8)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '60px',
              color: '#fb923c',
              textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
            }}>About Our Project</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  color: 'white'
                }}>Sejarah & Budaya Indonesia</h3>
                <p style={{
                  color: '#d1d5db',
                  lineHeight: '1.8',
                  marginBottom: '20px'
                }}>
                  Website ini menghadirkan konten sejarah kerajaan Majapahit dan tokoh-tokoh penting yang telah membentuk sejarah Indonesia. Kami menggabungkan teknologi modern dengan warisan budaya yang kaya.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#f97316',
                    fontWeight: '500'
                  }}>
                    <i className="fas fa-check-circle"></i>
                    <span>Sejarah Lengkap</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#f97316',
                    fontWeight: '500'
                  }}>
                    <i className="fas fa-check-circle"></i>
                    <span>Konten Interaktif</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#f97316',
                    fontWeight: '500'
                  }}>
                    <i className="fas fa-check-circle"></i>
                    <span>Desain Modern</span>
                  </div>
                </div>
              </div>
              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.8)',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '24px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#f97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                    }}>
                      <i className="fas fa-users" style={{ color: 'white', fontSize: '24px' }}></i>
                    </div>
                    <h4 style={{ color: 'white', marginBottom: '8px' }}>8 Team Members</h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>Tim yang berdedikasi</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#f97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                    }}>
                      <i className="fas fa-code" style={{ color: 'white', fontSize: '24px' }}></i>
                    </div>
                    <h4 style={{ color: 'white', marginBottom: '8px' }}>Modern Tech</h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>Next.js & React</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#f97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                    }}>
                      <i className="fas fa-palette" style={{ color: 'white', fontSize: '24px' }}></i>
                    </div>
                    <h4 style={{ color: 'white', marginBottom: '8px' }}>Creative Design</h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>UI/UX Modern</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#f97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                    }}>
                      <i className="fas fa-mobile-alt" style={{ color: 'white', fontSize: '24px' }}></i>
                    </div>
                    <h4 style={{ color: 'white', marginBottom: '8px' }}>Responsive</h4>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>Mobile Friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{
          padding: '80px 0',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '60px',
              color: '#fb923c',
              textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
            }}>Our Features</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}>
              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.8)',
                padding: '32px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(249, 115, 22, 0.2)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.2)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)'
                }}>
                  <i className="fas fa-history" style={{ color: 'white', fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Sejarah Majapahit</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  Pelajari sejarah lengkap kerajaan Majapahit, dari berdirinya hingga kejayaannya sebagai kerajaan terbesar di Nusantara.
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.8)',
                padding: '32px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(249, 115, 22, 0.2)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.2)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)'
                }}>
                  <i className="fas fa-book-open" style={{ color: 'white', fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Dongeng & Cerita</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  Nikmati koleksi dongeng dan cerita rakyat yang menghibur dan mendidik untuk semua usia.
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.8)',
                padding: '32px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(249, 115, 22, 0.2)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.2)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)'
                }}>
                  <i className="fas fa-feather-alt" style={{ color: 'white', fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Puisi & Sastra</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  Kumpulan puisi dan karya sastra yang menggugah jiwa dan memperkaya batin.
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.8)',
                padding: '32px',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(249, 115, 22, 0.2)',
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(249, 115, 22, 0.2)';
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)'
                }}>
                  <i className="fas fa-music" style={{ color: 'white', fontSize: '32px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Musik & Audio</h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  Dengarkan musik tradisional dan modern yang menghibur dan menenangkan jiwa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          padding: '80px 0',
          backgroundColor: 'rgba(31, 41, 55, 0.8)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(249, 115, 22, 0.05) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}></div>
          
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '60px',
              color: '#fb923c',
              textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
            }}>Ready to Get Started?</h2>
            <p style={{
              fontSize: '20px',
              color: '#d1d5db',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Bergabunglah dengan kami dan jelajahi dunia sejarah, budaya, dan kreativitas Indonesia
            </p>
            <div style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => router.push('/register')}
                style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#ea580c';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f97316';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(249, 115, 22, 0.3)';
                }}
              >
                <i className="fas fa-user-plus"></i>
                Create Account
              </button>
              <button
                onClick={() => router.push('/login')}
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  border: '2px solid #f97316',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f97316';
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(249, 115, 22, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fas fa-sign-in-alt"></i>
                Sign In
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: '#111827',
          padding: '40px 0',
          textAlign: 'center',
          borderTop: '1px solid rgba(249, 115, 22, 0.2)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#f97316',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)'
              }}>
                <i className="fas fa-code" style={{ color: 'white', fontSize: '18px' }}></i>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
              }}>
                Portfolio Website
              </span>
            </div>
            <p style={{ color: '#9ca3af', marginBottom: '20px' }}>
              Menghadirkan sejarah, budaya, dan kreativitas Indonesia dalam format digital yang modern
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <a href="#" style={{
                color: '#f97316',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ea580c';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" style={{
                color: '#f97316',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ea580c';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{
                color: '#f97316',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ea580c';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={{
                color: '#f97316',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#ea580c';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              &copy; 2024 Portfolio Website. Dibuat dengan ❤️ oleh tim kami.
            </p>
          </div>
        </footer>

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
        `}</style>
      </div>
    </>
  );
} 