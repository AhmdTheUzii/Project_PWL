import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
    setLoading(false);

    // Scroll effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  const confirmLogout = () => {
    if (window.confirm('Apakah Anda yakin ingin logout?')) {
      handleLogout();
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
        color: 'white',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid rgba(249, 115, 22, 0.2)',
            borderTop: '4px solid #f97316',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 24px',
            boxShadow: '0 0 30px rgba(249, 115, 22, 0.3)'
          }}></div>
          <p style={{ 
            fontSize: '16px', 
            color: '#9ca3af',
            animation: 'fadeInOut 2s ease-in-out infinite'
          }}>
            Loading...
          </p>
        </div>
      </div>
    );
  }

  const teamMembers = [
    { name: 'Afi', role: 'Frontend Developer', image: '/images/afi.jpg', color: '#f97316' },
    { name: 'Angger', role: 'UI/UX Designer', image: '/images/6.jpg', color: '#8b5cf6' },
    { name: 'Bella', role: 'Content Creator', image: '/images/2.jpg', color: '#ec4899' },
    { name: 'Ell', role: 'Backend Developer', image: '/images/3.jpg', color: '#06b6d4' },
    { name: 'Hasan', role: 'Full Stack Developer', image: '/images/8.jpg', color: '#10b981' },
    { name: 'Mus', role: 'Graphic Designer', image: '/images/7.jpg', color: '#f59e0b' },
    { name: 'Ogi', role: 'Project Manager', image: '/images/5.jpg', color: '#ef4444' },
    { name: 'Tiara', role: 'Marketing Specialist', image: '/images/4.jpg', color: '#84cc16' }
  ];

  return (
    <>
      <Head>
        <title>Portfolio - {user?.username}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <div style={{ 
        backgroundColor: '#111827',
        color: 'white',
        fontFamily: 'Poppins, sans-serif',
        margin: 0,
        padding: '40px 20px',
        minHeight: '100vh'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'fixed',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 1,
          filter: 'blur(1px)'
        }}></div>
        
        <div style={{
          position: 'fixed',
          bottom: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
          zIndex: 1,
          filter: 'blur(1px)'
        }}></div>

        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: `rgba(17, 24, 39, ${Math.min(0.95 + scrollY * 0.0001, 0.98)})`,
          backdropFilter: 'blur(20px)',
          zIndex: 50,
          padding: '16px 0',
          borderBottom: '1px solid rgba(249, 115, 22, 0.2)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#f97316',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(249, 115, 22, 0.6)',
                animation: 'pulse 2s infinite',
                transition: 'all 0.3s ease'
              }}>
                <span style={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: '16px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  {user?.username ? user.username.toUpperCase().charAt(0) : 'U'}
                </span>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: '#9ca3af', display: 'block' }}>
                  Selamat datang,
                </span>
                <span style={{ 
                  fontSize: '16px', 
                  color: '#fb923c', 
                  fontWeight: '600',
                  textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
                }}>
                  {user?.username}
                </span>
              </div>
            </div>
            
            <ul style={{ 
              display: 'flex', 
              gap: '40px', 
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
              {['Home', 'Content', 'Our Project', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none', 
                      transition: 'all 0.3s ease', 
                      fontWeight: '500',
                      fontSize: '14px',
                      position: 'relative',
                      padding: '8px 0',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#f97316';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.toLowerCase().replace(' ', '-');
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        targetElement.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                  >
                    {item}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '2px',
                      backgroundColor: '#f97316',
                      transition: 'width 0.3s ease',
                      borderRadius: '1px'
                    }}></div>
                  </a>
                </li>
              ))}
            </ul>
           
            <button 
              style={{
                backgroundColor: '#f97316',
                color: 'white',
                padding: '12px 28px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '600',
                fontSize: '14px',
                boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#ea580c';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 30px rgba(249, 115, 22, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f97316';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 20px rgba(249, 115, 22, 0.4)';
              }}
              onClick={confirmLogout}
            >
              <i className="fas fa-sign-out-alt" style={{ marginRight: '8px' }}></i>
              Logout
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" style={{
          paddingTop: '120px',
          paddingBottom: '80px',
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(249, 115, 22, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)
            `,
            pointerEvents: 'none'
          }}></div>
          
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h1 style={{
                fontSize: '56px',
                fontWeight: '700',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #f59e0b, #ea580c, #dc2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
                lineHeight: '1.2',
                animation: 'fadeInUp 1s ease-out'
              }}>
                Portfolio <span style={{ color: 'white' }}>Website</span>
              </h1>
              <p style={{ 
                color: '#9ca3af', 
                fontSize: '20px', 
                marginBottom: '40px', 
                maxWidth: '700px', 
                margin: '0 auto 40px',
                lineHeight: '1.6',
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}>
                Selamat datang di website portfolio kelompok kami yang menampilkan karya-karya terbaik dalam pengembangan web dan desain
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(31, 41, 55, 0.9)',
                padding: '16px 32px',
                borderRadius: '9999px',
                border: '1px solid rgba(249, 115, 22, 0.4)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                animation: 'fadeInUp 1s ease-out 0.4s both'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  marginRight: '16px',
                  animation: 'pulse 2s infinite',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)'
                }}></div>
                <span style={{ 
                  fontSize: '16px', 
                  color: '#d1d5db', 
                  fontWeight: '500',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                  Online - Login sebagai {user?.username}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section id="services" style={{
          padding: '80px 0',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{
                fontSize: '40px',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#fb923c',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)',
                animation: 'fadeInUp 1s ease-out'
              }}>
                Our Team
              </h2>
              <p style={{
                color: '#9ca3af',
                fontSize: '18px',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}>
                Tim kami terdiri dari para profesional yang ahli di bidangnya masing-masing
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginBottom: '64px'
            }}>
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  style={{
                    backgroundColor: 'rgba(55, 65, 81, 0.9)',
                    borderRadius: '24px',
                    padding: '32px',
                    textAlign: 'center',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: hoveredCard === member.name 
                      ? '0 20px 60px rgba(0, 0, 0, 0.5)' 
                      : '0 8px 32px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: hoveredCard === member.name ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                  }}
                  onMouseEnter={() => setHoveredCard(member.name)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => router.push(`/${member.name.toLowerCase()}`)}
                >
                  {/* Background gradient effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${member.color}20 0%, transparent 100%)`,
                    opacity: hoveredCard === member.name ? 1 : 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none'
                  }}></div>

                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    margin: '0 auto 24px',
                    overflow: 'hidden',
                    border: `3px solid ${member.color}`,
                    boxShadow: `0 8px 32px ${member.color}40`,
                    transition: 'all 0.4s ease',
                    transform: hoveredCard === member.name ? 'scale(1.1)' : 'scale(1)'
                  }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                  </div>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{
                    color: member.color,
                    fontSize: '16px',
                    fontWeight: '500',
                    marginBottom: '20px',
                    textShadow: `0 2px 8px ${member.color}40`
                  }}>
                    {member.role}
                  </p>

                  <button style={{
                    backgroundColor: member.color,
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 4px 20px ${member.color}40`,
                    transform: hoveredCard === member.name ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = `0 8px 30px ${member.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = `0 4px 20px ${member.color}40`;
                  }}
                  >
                    View Portfolio
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section id="content" style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{
                fontSize: '40px',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#fb923c',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)',
                animation: 'fadeInUp 1s ease-out'
              }}>
                Our Content
              </h2>
              <p style={{
                color: '#9ca3af',
                fontSize: '18px',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}>
                Jelajahi konten menarik tentang sejarah, budaya, dan seni Indonesia
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              marginBottom: '64px'
            }}>
              {[
                {
                  title: 'Sejarah',
                  description: 'Pelajari sejarah kerajaan-kerajaan di Jawa dan Indonesia',
                  icon: 'fas fa-landmark',
                  color: '#f97316',
                  image: '/images/raden wijaya.jpg',
                  link: '/sejarah'
                },
                {
                  title: 'Dongeng',
                  description: 'Kumpulan dongeng dan cerita rakyat Indonesia',
                  icon: 'fas fa-book-open',
                  color: '#8b5cf6',
                  image: '/images/kancil.jpg',
                  link: '/dongeng'
                },
                {
                  title: 'Puisi',
                  description: 'Karya puisi dan sastra Indonesia',
                  icon: 'fas fa-feather-alt',
                  color: '#ec4899',
                  image: '/images/puisi.jpg',
                  link: '/puisi'
                },
                {
                  title: 'Musik',
                  description: 'Musik tradisional dan modern Indonesia',
                  icon: 'fas fa-music',
                  color: '#06b6d4',
                  image: '/images/musik.avif',
                  link: '/musik'
                }
              ].map((content, index) => (
                <div
                  key={content.title}
                  style={{
                    backgroundColor: 'rgba(55, 65, 81, 0.9)',
                    borderRadius: '24px',
                    padding: '32px',
                    textAlign: 'center',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                  }}
                  onClick={() => router.push(content.link)}
                >
                  {/* Background gradient effect */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${content.color}20 0%, transparent 100%)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    pointerEvents: 'none'
                  }}></div>

                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '16px',
                    margin: '0 auto 24px',
                    overflow: 'hidden',
                    border: `3px solid ${content.color}`,
                    boxShadow: `0 8px 32px ${content.color}40`,
                    transition: 'all 0.4s ease'
                  }}>
                    <img
                      src={content.image}
                      alt={content.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                  </div>

                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: content.color,
                    borderRadius: '50%',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 32px ${content.color}40`
                  }}>
                    <i className={content.icon} style={{ 
                      color: 'white', 
                      fontSize: '24px',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}></i>
                  </div>

                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '12px',
                    color: 'white',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}>
                    {content.title}
                  </h3>
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '16px',
                    marginBottom: '24px',
                    lineHeight: '1.6'
                  }}>
                    {content.description}
                  </p>

                  <button style={{
                    backgroundColor: content.color,
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 4px 20px ${content.color}40`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = `0 8px 30px ${content.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = `0 4px 20px ${content.color}40`;
                  }}
                  >
                    Jelajahi
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Project Section */}
        <section id="our-project" style={{
          padding: '80px 0',
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{
                fontSize: '40px',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#fb923c',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)',
                animation: 'fadeInUp 1s ease-out'
              }}>
                Our Project
              </h2>
              <p style={{
                color: '#9ca3af',
                fontSize: '18px',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}>
                Lihat project terbaru kami yang telah berhasil dikembangkan
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              marginBottom: '32px'
            }}>
              {/* Project Card 1 - Portfolio Website */}
              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.9)',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animation: 'fadeInUp 0.8s ease-out 0.1s both'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
              onClick={() => window.open('https://youtu.be/2QZ7WtEPx60?si=HvTdSOgh2k6cXpnm', '_blank', 'noopener,noreferrer')}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)'
                }}>
                  <i className="fas fa-globe" style={{ color: 'white', fontSize: '24px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Portfolio Website
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '20px' }}>
                  Website portfolio modern dengan Next.js dan React
                </p>
                <a
                  href="https://youtu.be/2QZ7WtEPx60?si=HvTdSOgh2k6cXpnm"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#f97316',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-youtube" style={{ marginRight: '6px' }}></i>
                  Watch Demo
                </a>
              </div>

              {/* Project Card 2 - Desktop Coffeeshop App */}
              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.9)',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animation: 'fadeInUp 0.8s ease-out 0.2s both'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
              onClick={() => window.open('https://youtu.be/vOsuZEOF0HA?si=S-5yx2r7N5_EJlYE', '_blank', 'noopener,noreferrer')}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#8b5cf6',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.4)'
                }}>
                  <i className="fas fa-coffee" style={{ color: 'white', fontSize: '24px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Desktop Coffeeshop App
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '20px' }}>
                  Aplikasi desktop untuk manajemen coffeeshop
                </p>
                <a
                  href="https://youtu.be/vOsuZEOF0HA?si=S-5yx2r7N5_EJlYE"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#8b5cf6',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-youtube" style={{ marginRight: '6px' }}></i>
                  Watch Demo
                </a>
              </div>

              {/* Project Card 3 - Mobile App */}
              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.9)',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                animation: 'fadeInUp 0.8s ease-out 0.3s both'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
              onClick={() => window.open('https://play.google.com', '_blank', 'noopener,noreferrer')}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ec4899',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(236, 72, 153, 0.4)'
                }}>
                  <i className="fas fa-mobile-alt" style={{ color: 'white', fontSize: '24px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Mobile App
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '20px' }}>
                  Aplikasi mobile untuk iOS dan Android
                </p>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#ec4899',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className="fab fa-google-play" style={{ marginRight: '6px' }}></i>
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          padding: '80px 0',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{
                fontSize: '40px',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#fb923c',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)',
                animation: 'fadeInUp 1s ease-out'
              }}>
                Contact Us
              </h2>
              <p style={{
                color: '#9ca3af',
                fontSize: '18px',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                animation: 'fadeInUp 1s ease-out 0.2s both'
              }}>
                Hubungi kami untuk informasi lebih lanjut tentang project dan layanan kami
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              animation: 'fadeInUp 1s ease-out 0.4s both'
            }}>
              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.9)',
                borderRadius: '24px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)'
                }}>
                  <i className="fas fa-envelope" style={{ color: 'white', fontSize: '24px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Email
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '16px' }}>
                  info@portfolio.com
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.9)',
                borderRadius: '24px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)'
                }}>
                  <i className="fas fa-phone" style={{ color: 'white', fontSize: '24px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Phone
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '16px' }}>
                  +62 123 456 789
                </p>
              </div>

              <div style={{
                backgroundColor: 'rgba(55, 65, 81, 0.9)',
                borderRadius: '24px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f97316',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 32px rgba(249, 115, 22, 0.4)'
                }}>
                  <i className="fas fa-map-marker-alt" style={{ color: 'white', fontSize: '24px' }}></i>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: 'white' }}>
                  Address
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '16px' }}>
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          padding: '40px 0',
          textAlign: 'center',
          borderTop: '1px solid rgba(249, 115, 22, 0.2)',
          marginTop: '80px',
          backdropFilter: 'blur(20px)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <p style={{ 
              color: '#9ca3af',
              fontSize: '16px',
              marginBottom: '24px'
            }}>
              &copy; 2025 Portfolio Website. Dibuat dengan ❤️ untuk Indonesia.
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px'
            }}>
              <a href="#" style={{
                color: '#9ca3af',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#9ca3af';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" style={{
                color: '#9ca3af',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#9ca3af';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" style={{
                color: '#9ca3af',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#9ca3af';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" style={{
                color: '#9ca3af',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#f97316';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#9ca3af';
                e.target.style.transform = 'translateY(0)';
              }}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              transform: scale(1);
              opacity: 1;
            }
            50% { 
              transform: scale(1.05);
              opacity: 0.8;
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInOut {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    </>
  );
} 