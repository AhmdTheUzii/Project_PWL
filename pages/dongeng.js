import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Dongeng() {
  const [expandedStory, setExpandedStory] = useState(null);
  const router = useRouter();

  const toggleStory = (storyId) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  const dongengData = [
    {
      id: 'si-kancil',
      title: 'Si Kancil dan Buaya',
      image: '/images/kancil.jpg',
      content: `Pada suatu hari yang cerah, Si Kancil berjalan-jalan di hutan. Ia merasa sangat lapar. Di seberang sungai, ia melihat ladang timun yang subur dan segar. Tapi masalahnya, ia harus menyeberangi sungai yang penuh dengan buaya.

Si Kancil yang cerdik pun berpikir keras. Akhirnya, ia mendapat ide brilian. Ia mendekati sungai dan berteriak, "Hai buaya-buaya! Raja hutan ingin menghitung jumlah kalian semua!"

Buaya-buaya yang mendengar teriakan Si Kancil langsung berbaris rapi di sungai. Si Kancil pun mulai menghitung sambil melompat dari punggung satu buaya ke buaya lainnya.

"1, 2, 3, 4, 5..." Si Kancil menghitung sambil melompat dengan cekatan. Ketika sampai di seberang, ia langsung lari ke ladang timun dan memakan timun-timun segar dengan nikmat.

Buaya-buaya baru sadar bahwa mereka telah ditipu oleh Si Kancil yang cerdik. Namun, Si Kancil sudah menghilang di kejauhan dengan perut kenyang.

Pesan moral: Kecerdikan dan ketenangan dalam menghadapi masalah dapat mengatasi kesulitan yang besar.`
    },
    {
      id: 'bawang-merah-putih',
      title: 'Bawang Merah dan Bawang Putih',
      image: '/images/bawang.jpg',
      content: `Pada zaman dahulu, hiduplah seorang janda bersama dua anak gadisnya. Anak kandungnya bernama Bawang Merah, sedangkan anak tirinya bernama Bawang Putih.

Bawang Merah sangat manja dan malas, sementara Bawang Putih rajin dan baik hati. Ibu tiri Bawang Putih sangat menyayangi Bawang Merah dan selalu menyuruh Bawang Putih melakukan semua pekerjaan rumah.

Suatu hari, Bawang Putih diminta mencuci pakaian di sungai. Tiba-tiba, pakaian Bawang Putih hanyut terbawa arus. Bawang Putih menangis sedih, tetapi kemudian seekor ikan mas ajaib muncul dan memberikan pakaian yang lebih indah.

Ibu tiri dan Bawang Merah menjadi iri. Mereka menyuruh Bawang Putih mencuci lagi, tetapi kali ini Bawang Merah yang pergi ke sungai. Namun, karena Bawang Merah tidak baik hati, ikan mas tidak mau membantu.

Akhirnya, Bawang Putih menikah dengan pangeran dan hidup bahagia, sementara Bawang Merah dan ibu tirinya mendapat pelajaran berharga.

Pesan moral: Kebaikan hati dan ketekunan akan selalu mendapat balasan yang baik.`
    },
    {
      id: 'timun-mas',
      title: 'Timun Mas',
      image: '/images/buto.jpg',
      content: `Pada zaman dahulu, hiduplah seorang janda tua bernama Mbok Rondo yang tinggal di sebuah desa dekat hutan. Ia sangat mendambakan seorang anak, namun usianya sudah tua.

Suatu hari, Mbok Rondo bertemu dengan raksasa yang berjanji akan memberinya anak jika ia bersedia memberikan anak tersebut kepadanya ketika berusia 17 tahun. Mbok Rondo setuju karena sangat ingin memiliki anak.

Raksasa memberikan biji timun ajaib. Ketika ditanam, dari dalam timun muncul seorang bayi perempuan yang cantik. Mbok Rondo menamainya Timun Mas.

Timun Mas tumbuh menjadi gadis yang cantik dan baik hati. Ketika usianya hampir 17 tahun, Mbok Rondo sangat sedih karena harus menyerahkan Timun Mas kepada raksasa.

Raksasa memberikan Timun Mas empat benda ajaib: jarum, garam, terasi, dan biji timun. Dengan benda-benda tersebut, Timun Mas berhasil melarikan diri dan mengalahkan raksasa.

Timun Mas kembali ke rumah dan hidup bahagia bersama Mbok Rondo.

Pesan moral: Kasih sayang seorang ibu tidak ada batasnya dan akan selalu melindungi anaknya.`
    },
    {
      id: 'ande-ande-lumut',
      title: 'Ande Ande Lumut',
      image: '/images/ande.jpg',
      content: `Pada zaman dahulu kala, hiduplah seorang janda dengan tiga orang putrinya yang cantik-cantik. Anak-anak itu sebenarnya adalah anak bangsawan.

Suatu hari, datang seorang pangeran tampan bernama Ande Ande Lumut yang sedang mencari istri. Ketiga putri tersebut sangat tertarik dengan pangeran.

Pangeran mengadakan sayembara. Siapa yang bisa menebak namanya dengan benar, akan dinikahinya. Ketiga putri pun berusaha menebak nama pangeran.

Putri pertama dan kedua gagal menebak. Putri ketiga yang paling cerdik, berhasil menebak nama pangeran dengan benar.

Pangeran pun menikahi putri ketiga dan mereka hidup bahagia selamanya.

Pesan moral: Kecerdikan dan ketekunan dalam mencari solusi akan membawa keberhasilan.`
    },
    {
      id: 'tangkuban-perahu',
      title: 'Tangkuban Perahu',
      image: '/images/sang.jpg',
      content: `Pada zaman dahulu kala, hiduplah seorang putri cantik bernama Dayang Sumbi yang tinggal di sebuah kerajaan di Jawa Barat. Ia sangat suka menenun.

Suatu hari, ketika sedang menenun, alat tenunnya jatuh. Dayang Sumbi berjanji akan menikahi siapa saja yang mengambilkan alat tenunnya.

Seekor anjing bernama Tumang mengambilkan alat tenun tersebut. Dayang Sumbi pun menikahi Tumang, yang sebenarnya adalah seorang dewa yang dikutuk menjadi anjing.

Dari pernikahan tersebut, lahirlah seorang anak laki-laki bernama Sangkuriang. Ketika dewasa, Sangkuriang tidak tahu bahwa Tumang adalah ayahnya.

Suatu hari, Sangkuriang membunuh Tumang dalam perburuan. Dayang Sumbi sangat marah dan mengusir Sangkuriang.

Bertahun-tahun kemudian, Sangkuriang kembali dan jatuh cinta dengan Dayang Sumbi tanpa tahu bahwa ia adalah ibunya. Dayang Sumbi pun menyadari hal tersebut dan memberikan syarat yang mustahil untuk menikahinya.

Sangkuriang diminta membuat danau dan perahu dalam satu malam. Ketika hampir selesai, Dayang Sumbi meminta bantuan para dewa untuk menghentikan pekerjaan Sangkuriang.

Sangkuriang marah dan menendang perahu yang belum selesai, sehingga terbalik dan menjadi Gunung Tangkuban Perahu.

Pesan moral: Kesalahan dan dosa akan selalu mendapat balasan, dan tidak ada yang bisa melawan takdir.`
    }
  ];

  return (
    <>
      <Head>
        <title>Dongeng Indonesia - Portfolio Website</title>
        <meta name="description" content="Kumpulan dongeng dan cerita rakyat Indonesia yang legendaris" />
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
                <i className="fas fa-book-open" style={{ color: 'white', fontSize: '18px' }}></i>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
              }}>
                Dongeng Nusantara
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
              <a href="#stories" style={{
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
                Cerita
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
          background: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/dng.jpg')`,
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
              Dongeng Nusantara
              <br />
              <span style={{ color: 'white' }}>Cerita Rakyat</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#9ca3af',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Nikmati koleksi dongeng dan cerita rakyat yang menghibur dan mendidik untuk semua usia
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {dongengData.map((item) => (
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

        {/* Stories Section */}
        <section id="stories" style={{
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
            }}>Kumpulan Dongeng</h2>
            
            <div style={{
              display: 'grid',
              gap: '32px'
            }}>
              {dongengData.map((item) => (
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
                        {expandedStory === item.id ? item.content : item.content.split('\n\n')[0]}
                      </p>
                      
                      <button
                        onClick={() => toggleStory(item.id)}
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
                        <i className={`fas ${expandedStory === item.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        {expandedStory === item.id ? 'Sembunyikan' : 'Baca Selengkapnya'}
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
              &copy; 2024 Dongeng Nusantara. Dibuat dengan ❤️ untuk melestarikan cerita rakyat Indonesia.
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