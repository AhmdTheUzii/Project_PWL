import Head from 'next/head';
import Link from 'next/link';

export default function Tiara() {
  return (
    <>
      <Head>
        <title>Tiara Ramadhania - Portfolio</title>
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
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>T</span>
              </div>
              <span style={{ fontSize: '14px', color: '#d1d5db' }}>
                Portfolio <span style={{ color: '#fb923c' }}>Tiara Ramadhania</span>
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
              src="/images/4.jpg" 
              alt="Tiara Ramadhania" 
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
              Tiara Ramadhania
            </h1>
            <p style={{ color: '#9ca3af', fontSize: '18px', marginBottom: '32px' }}>
              Full Stack Developer & Content Creator
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
          padding: '64px 0',
          backgroundColor: '#1f2937'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <h2 style={{
              fontSize: '30px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px',
              color: '#fb923c'
            }}>About Me</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              <div style={{
                backgroundColor: '#374151',
                padding: '24px',
                borderRadius: '8px'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#fb923c' }}>
                  <i className="fas fa-user" style={{ marginRight: '8px' }}></i>
                  Personal Info
                </h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  Saya adalah seorang full stack developer yang passionate dalam menciptakan aplikasi web yang kompleks dan fungsional. 
                  Juga aktif sebagai content creator di bidang teknologi.
                </p>
              </div>

              <div style={{
                backgroundColor: '#374151',
                padding: '24px',
                borderRadius: '8px'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#fb923c' }}>
                  <i className="fas fa-graduation-cap" style={{ marginRight: '8px' }}></i>
                  Education
                </h3>
                <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
                  Mahasiswa aktif di jurusan Teknik Informatika. 
                  Aktif dalam berbagai proyek open source dan komunitas developer.
                </p>
              </div>

              <div style={{
                backgroundColor: '#374151',
                padding: '24px',
                borderRadius: '8px'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#fb923c' }}>
                  <i className="fas fa-code" style={{ marginRight: '8px' }}></i>
                  Skills
                </h3>
                <div style={{ color: '#d1d5db' }}>
                  <p style={{ marginBottom: '8px' }}>• Frontend: React, Vue, Angular</p>
                  <p style={{ marginBottom: '8px' }}>• Backend: Node.js, PHP, Python</p>
                  <p style={{ marginBottom: '8px' }}>• Database: MySQL, MongoDB</p>
                  <p style={{ marginBottom: '8px' }}>• DevOps: Docker, AWS</p>
                  <p>• Content Creation</p>
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
              <a href="mailto:tiara@example.com" style={{
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
              <a href="https://github.com/tiara" target="_blank" style={{
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
              <a href="https://youtube.com/tiara" target="_blank" style={{
                backgroundColor: '#ff0000',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background-color 0.3s'
              }}>
                <i className="fab fa-youtube" style={{ marginRight: '8px' }}></i>
                YouTube
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