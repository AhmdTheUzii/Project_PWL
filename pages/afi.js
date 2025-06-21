import Head from 'next/head';
import Link from 'next/link';

export default function Afi() {
  return (
    <>
      <Head>
        <title>Afi Aulia - Portfolio</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div style={{ 
        backgroundColor: '#111827',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: '40px 20px',
        minHeight: '100vh'
      }}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: 'rgba(17, 24, 39, 0.95)',
          backdropFilter: 'blur(8px)',
          zIndex: 50,
          padding: '16px 0'
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
                width: '32px',
                height: '32px',
                backgroundColor: '#f97316',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>A</span>
              </div>
              <span style={{ fontSize: '14px', color: '#d1d5db' }}>
                Portfolio <span style={{ color: '#fb923c' }}>Afi Aulia</span>
              </span>
            </div>
            
            <Link href="/dashboard" style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '8px 24px',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'background-color 0.3s'
            }}>
              <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>Kembali
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{
          paddingTop: '96px',
          paddingBottom: '64px',
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
          position: 'relative'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center'
          }}>
            <img 
              src="/images/afi.jpg" 
              alt="Afi Aulia" 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid orange',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                margin: '0 auto 32px'
              }}
            />
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Afi Aulia
            </h1>
            <p style={{ color: '#9ca3af', fontSize: '18px', marginBottom: '32px' }}>
              Web Developer & Designer
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#1f2937',
              padding: '8px 16px',
              borderRadius: '9999px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                marginRight: '8px',
                animation: 'pulse 2s infinite'
              }}></div>
              <span style={{ fontSize: '14px', color: '#d1d5db' }}>
                Available for projects
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section style={{
          padding: '80px 0',
          backgroundColor: '#1f2937',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 60%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0
          }}></div>

          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1
          }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '64px',
              color: 'white',
              textShadow: '0 2px 15px rgba(249, 115, 22, 0.4)'
            }}>
              About <span style={{color: '#f97316'}}>Me</span>
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto auto',
              gridTemplateAreas: `
                "personal personal education"
                "personal personal skills"
              `,
              gap: '32px'
            }}>
              {/* Personal Info Card */}
              <div style={{
                gridArea: 'personal',
                background: 'rgba(31, 41, 55, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '40px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                  }}>
                    <i className="fas fa-user-tie" style={{ color: 'white', fontSize: '20px' }}></i>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'white' }}>
                    Personal Info
                  </h3>
                </div>
                <p style={{ color: '#d1d5db', lineHeight: '1.7', fontSize: '16px' }}>
                  Saya adalah seorang web developer yang passionate dalam menciptakan website yang menarik dan fungsional. 
                  Dengan pengalaman dalam HTML, CSS, JavaScript, dan berbagai framework modern, saya selalu antusias untuk belajar
                  teknologi baru dan memberikan solusi digital terbaik.
                </p>
              </div>

              {/* Education Card */}
              <div style={{
                gridArea: 'education',
                background: 'rgba(31, 41, 55, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '40px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                  }}>
                    <i className="fas fa-graduation-cap" style={{ color: 'white', fontSize: '20px' }}></i>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'white' }}>
                    Education
                  </h3>
                </div>
                <p style={{ color: '#d1d5db', lineHeight: '1.7', fontSize: '16px' }}>
                  Mahasiswa aktif di jurusan Teknik Informatika. 
                  Aktif mengikuti berbagai workshop dan bootcamp untuk meningkatkan skill programming.
                </p>
              </div>

              {/* Skills Card */}
              <div style={{
                gridArea: 'skills',
                background: 'rgba(31, 41, 55, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '40px',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '20px',
                    boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)'
                  }}>
                    <i className="fas fa-code" style={{ color: 'white', fontSize: '20px' }}></i>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', color: 'white' }}>
                    Skills
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'PHP', 'MySQL', 'UI/UX Design', 'Git & Version Control'].map(skill => (
                    <div key={skill} style={{
                      background: 'rgba(249, 115, 22, 0.15)',
                      color: '#fb923c',
                      padding: '8px 16px',
                      borderRadius: '9999px',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: '1px solid rgba(249, 115, 22, 0.4)',
                      transition: 'all 0.3s ease'
                    }}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{
          padding: '64px 0',
          backgroundColor: '#111827'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '30px',
              fontWeight: 'bold',
              marginBottom: '48px',
              color: '#fb923c'
            }}>Get In Touch</h2>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              <a href="mailto:afi@example.com" style={{
                backgroundColor: '#f97316',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background-color 0.3s'
              }}>
                <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
                Email
              </a>
              <a href="https://github.com/afi" target="_blank" style={{
                backgroundColor: '#374151',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background-color 0.3s'
              }}>
                <i className="fab fa-github" style={{ marginRight: '8px' }}></i>
                GitHub
              </a>
              <a href="https://linkedin.com/in/afi" target="_blank" style={{
                backgroundColor: '#0077b5',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background-color 0.3s'
              }}>
                <i className="fab fa-linkedin" style={{ marginRight: '8px' }}></i>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          a:hover {
            background-color: #ea580c !important;
          }
        `}</style>
      </div>
    </>
  );
} 