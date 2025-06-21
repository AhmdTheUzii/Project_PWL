import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Musik() {
  const [expandedMusic, setExpandedMusic] = useState(null);
  const router = useRouter();

  const toggleMusic = (musicId) => {
    setExpandedMusic(expandedMusic === musicId ? null : musicId);
  };

  const musikData = [
    {
      id: 'gamelan',
      title: 'Gamelan Jawa',
      image: '/images/gamelan.jpg',
      description: 'Gamelan adalah ansambel musik tradisional Jawa yang terdiri dari berbagai instrumen perkusi.',
      content: `
        Gamelan Jawa adalah ansambel musik tradisional yang berasal dari Jawa, Indonesia. 
        Ansambel ini terdiri dari berbagai instrumen perkusi seperti gong, kenong, saron, 
        demung, peking, bonang, gender, slenthem, dan kendang.
        
        Gamelan Jawa memiliki sistem nada pentatonik (lima nada) yang berbeda dengan 
        musik Barat yang menggunakan sistem diatonik (tujuh nada). Nada-nada dalam 
        gamelan Jawa adalah: 1 (ji), 2 (ro), 3 (lu), 5 (mo), 6 (nem).
        
        Musik gamelan biasanya digunakan untuk mengiringi pertunjukan wayang kulit, 
        tari tradisional, upacara adat, dan acara-acara kerajaan. Setiap instrumen 
        dalam gamelan memiliki fungsi dan peran yang berbeda dalam menciptakan 
        harmoni musik yang indah.
      `
    },
    {
      id: 'angklung',
      title: 'Angklung',
      image: '/images/angklung.jpg',
      description: 'Angklung adalah alat musik tradisional Sunda yang terbuat dari bambu.',
      content: `
        Angklung adalah alat musik tradisional yang berasal dari tanah Sunda, Jawa Barat. 
        Alat musik ini terbuat dari bambu dan dimainkan dengan cara digoyangkan sehingga 
        menghasilkan bunyi yang merdu.
        
        Setiap angklung hanya menghasilkan satu nada, sehingga untuk memainkan sebuah 
        lagu diperlukan beberapa angklung dengan nada yang berbeda. Angklung biasanya 
        dimainkan secara berkelompok dengan koordinasi yang baik antar pemain.
        
        Angklung telah diakui oleh UNESCO sebagai Warisan Budaya Takbenda pada tahun 2010. 
        Alat musik ini tidak hanya populer di Indonesia, tetapi juga telah dikenal dan 
        dipelajari di berbagai negara di dunia.
      `
    },
    {
      id: 'keroncong',
      title: 'Keroncong',
      image: '/images/keroncong.jpg',
      description: 'Keroncong adalah genre musik tradisional Indonesia yang dipengaruhi oleh musik Portugis.',
      content: `
        Keroncong adalah genre musik tradisional Indonesia yang memiliki akar dari musik 
        Portugis yang dibawa oleh para pelaut dan pedagang pada abad ke-16. Musik ini 
        berkembang di Indonesia, terutama di Jakarta dan sekitarnya.
        
        Instrumen utama dalam musik keroncong adalah ukulele, gitar, biola, cello, 
        flute, dan vokal. Musik keroncong memiliki karakteristik melodi yang lembut 
        dan romantis, dengan lirik yang biasanya bercerita tentang cinta dan kehidupan.
        
        Beberapa lagu keroncong terkenal antara lain "Bengawan Solo", "Kroncong Moritsko", 
        "Stambul Jauh di Mata", dan "Kroncong Kemayoran". Musik keroncong masih tetap 
        lestari dan dimainkan hingga saat ini, baik dalam bentuk tradisional maupun 
        dengan sentuhan modern.
      `
    },
    {
      id: 'dangdut',
      title: 'Dangdut',
      image: '/images/dangdut.jpg',
      description: 'Dangdut adalah genre musik populer Indonesia yang menggabungkan musik Melayu, India, dan Arab.',
      content: `
        Dangdut adalah genre musik populer Indonesia yang muncul pada tahun 1970-an. 
        Musik ini menggabungkan unsur-unsur musik Melayu, India, Arab, dan musik Barat. 
        Nama "dangdut" berasal dari suara kendang yang menghasilkan bunyi "dang" dan "dut".
        
        Instrumen utama dalam musik dangdut adalah kendang, gitar, bass, keyboard, 
        dan vokal. Musik dangdut memiliki ritme yang khas dan mudah untuk didengarkan 
        serta ditarikan.
        
        Beberapa musisi dangdut terkenal antara lain Rhoma Irama, Elvy Sukaesih, 
        A. Rafiq, dan Inul Daratista. Dangdut telah menjadi bagian penting dari 
        budaya musik Indonesia dan memiliki penggemar yang sangat loyal dari berbagai 
        kalangan masyarakat.
      `
    },
    {
      id: 'campursari',
      title: 'Campursari',
      image: '/images/campursari.jpg',
      description: 'Campursari adalah perpaduan musik tradisional Jawa dengan musik modern.',
      content: `
        Campursari adalah genre musik yang menggabungkan musik tradisional Jawa 
        (gamelan) dengan musik modern seperti pop, rock, dan dangdut. Genre ini 
        muncul pada tahun 1990-an dan dipopulerkan oleh musisi seperti Manthous 
        dan Didi Kempot.
        
        Musik campursari menggunakan instrumen gamelan tradisional seperti saron, 
        demung, dan gong, yang dipadukan dengan instrumen modern seperti gitar, 
        keyboard, dan drum. Hasilnya adalah musik yang unik yang mempertahankan 
        nuansa Jawa namun tetap mudah dinikmati oleh generasi muda.
        
        Lagu-lagu campursari biasanya bercerita tentang kehidupan sehari-hari, 
        cinta, dan kearifan lokal Jawa. Genre ini telah berhasil menjembatani 
        gap antara musik tradisional dan modern, sehingga tetap relevan hingga saat ini.
      `
    }
  ];

  return (
    <>
      <Head>
        <title>Musik Indonesia - Portfolio Website</title>
        <meta name="description" content="Dengarkan musik tradisional dan modern Indonesia" />
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
                <i className="fas fa-music" style={{ color: 'white', fontSize: '18px' }}></i>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
              }}>
                Musik Indonesia
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
              <a href="#music" style={{
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
                Musik
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
          zIndex: 2
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
              Musik Tradisional
              <br />
              <span style={{ color: 'white' }}>Indonesia</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#9ca3af',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Jelajahi kekayaan musik tradisional dan modern Indonesia yang menggugah jiwa
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {musikData.map((item) => (
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

        {/* Music Section */}
        <section id="music" style={{
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
            }}>Kumpulan Musik</h2>
            
            <div style={{
              display: 'grid',
              gap: '32px'
            }}>
              {musikData.map((item) => (
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
                    display: 'grid',
                    gridTemplateColumns: '300px 1fr',
                    gap: '32px',
                    padding: '32px'
                  }}>
                    <div style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '16px'
                    }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          borderRadius: '16px',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                        padding: '20px',
                        borderRadius: '0 0 16px 16px'
                      }}>
                        <h3 style={{
                          color: 'white',
                          fontSize: '24px',
                          fontWeight: 'bold',
                          margin: 0,
                          textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                        }}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div>
                      <p style={{
                        color: '#d1d5db',
                        lineHeight: '1.8',
                        fontSize: '16px',
                        marginBottom: '20px'
                      }}>
                        {expandedMusic === item.id ? item.content : item.description}
                      </p>
                      
                      <button
                        onClick={() => toggleMusic(item.id)}
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
                        <i className={`fas ${expandedMusic === item.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        {expandedMusic === item.id ? 'Sembunyikan' : 'Baca Selengkapnya'}
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
              &copy; 2024 Musik Indonesia. Dibuat dengan ❤️ untuk melestarikan musik tradisional Indonesia.
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