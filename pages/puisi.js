import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Puisi() {
  const [expandedPoem, setExpandedPoem] = useState(null);
  const router = useRouter();

  const togglePoem = (poemId) => {
    setExpandedPoem(expandedPoem === poemId ? null : poemId);
  };

  const puisiData = [
    {
      id: 'puisi-1',
      title: 'Indonesia Raya',
      author: 'W.R. Supratman',
      content: `
        Indonesia tanah airku
        Tanah tumpah darahku
        Di sanalah aku berdiri
        Jadi pandu ibuku
        
        Indonesia kebangsaanku
        Bangsa dan tanah airku
        Marilah kita berseru
        Indonesia bersatu
        
        Hiduplah tanahku
        Hiduplah negeriku
        Bangsaku rakyatku semuanya
        Bangunlah jiwanya
        Bangunlah badannya
        Untuk Indonesia Raya
      `
    },
    {
      id: 'puisi-2',
      title: 'Aku',
      author: 'Chairil Anwar',
      content: `
        Kalau sampai waktuku
        'Kumau tak seorang 'kan merayu
        Tidak juga kau
        
        Tak perlu sedu sedan itu
        
        Aku ini binatang jalang
        Dari kumpulannya terbuang
        
        Biar peluru menembus kulitku
        Aku tetap meradang menerjang
        
        Luka dan bisa kubawa berlari
        Berlari
        Hingga hilang pedih peri
        
        Dan aku akan lebih tidak peduli
        Aku mau hidup seribu tahun lagi
      `
    },
    {
      id: 'puisi-3',
      title: 'Doa',
      author: 'Chairil Anwar',
      content: `
        Kepada pemeluk teguh
        
        Tuhanku
        Dalam termangu
        Aku masih menyebut namaMu
        
        Biar susah sungguh
        Mengingat Kau penuh seluruh
        
        CayaMu panas suci
        Tinggal kerdip lilin di kelam sunyi
        
        Tuhanku
        Aku hilang bentuk
        Remuk
        
        Tuhanku
        Aku mengembara di negeri asing
        
        Tuhanku
        Di pintuMu aku mengetuk
        Aku tidak bisa berpaling
      `
    },
    {
      id: 'puisi-4',
      title: 'Senja di Pelabuhan Kecil',
      author: 'Chairil Anwar',
      content: `
        Ini kali tidak ada yang mencari cinta
        di antara gudang, rumah tua, pada cerita
        tiang serta temali. Kapal, perahu tiada berlaut
        menghembus diri dalam mempercaya mau berpaut
        
        Gerimis mempercepat kelam. Ada juga kelepak elang
        menyinggung muram, desir hari lari berenang
        menemu bujuk pangkal akanan. Tidak bergerak
        dan kini tanah dan air tidur hilang ombak
        
        Tiada lagi. Aku sendiri. Berjalan
        menyisir semenanjung, masih pengap harap
        sekali tiba di ujung dan sekalian selamat jalan
        dari pantai keempat, sedu penghabisan bisa terdekap
      `
    },
    {
      id: 'puisi-5',
      title: 'Sajak Putih',
      author: 'Chairil Anwar',
      content: `
        Bersandar pada tari warna pelangi
        Kau depanku bertudung sutra senja
        Di hitam matamu kembang mawar dan melati
        Harum rambutmu mengalun bergelut senda
        
        Sepi menyanyi, malam dalam mendoa tiba
        Meriak muka air kolam jiwa
        Dan dalam dadaku memerdu lagu
        Menarik menari seluruh aku
        
        Hidup dari hidupku, pintu terbuka
        Selama matamu bagiku menengadah
        Selama kau darah mengalir dari luka
        Antara kita mati datang tidak membelah
      `
    }
  ];

  return (
    <>
      <Head>
        <title>Puisi Indonesia - Portfolio Website</title>
        <meta name="description" content="Kumpulan puisi-puisi indah dan bermakna dari penyair Indonesia" />
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
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 10s ease-in-out infinite reverse',
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
          padding: '16px 0',
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
                <i className="fas fa-feather-alt" style={{ color: 'white', fontSize: '18px' }}></i>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
              }}>
                Puisi Indonesia
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '24px',
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
              <a href="#poems" style={{
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
                Puisi
              </a>
              <button
                onClick={() => router.push('/dashboard')}
                style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
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
                <i className="fas fa-arrow-left"></i>
                Dashboard
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" style={{
          paddingTop: '120px',
          paddingBottom: '60px',
          position: 'relative',
          zIndex: 2,
          background: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/puisi.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
              lineHeight: '1.2'
            }}>
              Puisi Indonesia
              <br />
              <span style={{ color: 'white' }}>Karya Sastra</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#9ca3af',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Kumpulan puisi-puisi indah dan bermakna dari penyair Indonesia yang menggugah jiwa
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {puisiData.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    backgroundColor: 'rgba(55, 65, 81, 0.8)',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '12px 20px',
                    borderRadius: '9999px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f97316';
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(55, 65, 81, 0.8)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Poems Section */}
        <section id="poems" style={{
          padding: '60px 0',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '48px',
              color: '#fb923c',
              textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
            }}>Kumpulan Puisi</h2>
            
            <div style={{
              display: 'grid',
              gap: '32px'
            }}>
              {puisiData.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  style={{
                    backgroundColor: 'rgba(55, 65, 81, 0.8)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(249, 115, 22, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-4px)';
                    e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <div style={{
                    padding: '32px'
                  }}>
                    <div style={{
                      textAlign: 'center',
                      marginBottom: '24px'
                    }}>
                      <h3 style={{
                        color: '#f97316',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        margin: '0 0 8px 0'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        color: '#9ca3af',
                        fontSize: '16px',
                        fontStyle: 'italic',
                        margin: 0
                      }}>
                        Oleh: {item.author}
                      </p>
                    </div>
                    
                    <div style={{
                      backgroundColor: 'rgba(17, 24, 39, 0.6)',
                      padding: '24px',
                      borderRadius: '12px',
                      border: '1px solid rgba(249, 115, 22, 0.2)',
                      marginBottom: '20px'
                    }}>
                      <pre style={{
                        color: '#d1d5db',
                        lineHeight: '1.8',
                        fontSize: '16px',
                        fontFamily: 'Poppins, sans-serif',
                        whiteSpace: 'pre-wrap',
                        margin: 0,
                        textAlign: expandedPoem === item.id ? 'left' : 'center'
                      }}>
                        {expandedPoem === item.id ? item.content : item.content.split('\n\n')[0]}
                      </pre>
                    </div>
                    
                    <div style={{
                      textAlign: 'center'
                    }}>
                      <button
                        onClick={() => togglePoem(item.id)}
                        style={{
                          backgroundColor: '#f97316',
                          color: 'white',
                          border: 'none',
                          padding: '12px 24px',
                          borderRadius: '9999px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(249, 115, 22, 0.3)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px'
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
                        <i className={`fas ${expandedPoem === item.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        {expandedPoem === item.id ? 'Sembunyikan' : 'Baca Selengkapnya'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: 'rgba(17, 24, 39, 0.9)',
          padding: '32px 0',
          textAlign: 'center',
          borderTop: '1px solid rgba(249, 115, 22, 0.2)',
          marginTop: '60px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px'
          }}>
            <p style={{ color: '#9ca3af' }}>
              &copy; 2024 Puisi Indonesia. Dibuat dengan ❤️ untuk melestarikan karya sastra Indonesia.
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
        `}</style>
      </div>
    </>
  );
} 