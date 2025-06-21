import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function Sejarah() {
  const [expandedStory, setExpandedStory] = useState(null);
  const router = useRouter();

  const toggleStory = (storyId) => {
    setExpandedStory(expandedStory === storyId ? null : storyId);
  };

  const sejarahData = [
    {
      id: 'raden-wijaya',
      title: 'Raden Wijaya',
      image: '/images/raden wijaya.jpg',
      content: `
        <p>Raden Wijaya atau Dyah Wijaya, atau yang dikenal dengan nama regnalnya, Kertarajasa Jayawardana, adalah pendiri dan Maharaja pertama Majapahit yang memerintah pada tahun 1293 hingga kematiannya pada tahun 1309.</p>
        
        <h3>Asal-usul</h3>
        <p>Menurut Nagarakretagama Raden Wijaya adalah anak dari Dyah Lembu Tal, cucu Mahisa Campaka atau Narasinghamurti. Kakeknya ini, adalah anak dari Mahisa Wonga Teleng, putra dari Ken Angrok dan Ken Dedes. Ken Angrok atau Sri Ranggah Rajasa adalah pendiri Dinasti Rajasa yang kemudian menurunkan raja-raja Singhasari dan Majapahit.</p>
        
        <h3>Konflik dengan Mongol</h3>
        <p>Pada tahun 1289, Kubilai Khan mengirim permintaan upeti kepada Kerajaan Singhasari, namun permintaan tersebut ditolak oleh Kertanagara, Raja Singhasari dan utusan tersebut dipermalukan dengan dipotong telinganya. Tak lama kemudian, terjadi pemberontakan melawan Singhasari di Kadipaten Gelang-Gelang (sekarang Madiun) yang dipimpin oleh Jayakatwang.</p>
        
        <h3>Pendirian Majapahit</h3>
        <p>Pada bulan November 1292, pasukan Mongol mendarat di Tuban, Jawa Timur, dengan tujuan membalas dendam atas penghinaan Kertanegara terhadap utusan Mongol. Namun, Kertanegara sudah meninggal dunia. Raden Wijaya, yang merupakan menantu Kartanagara, awalnya bersekutu dengan bangsa Mongol dengan tujuan menyerang Kediri yang telah menjadi kerajaa terkuat di Jawa.</p>
      `
    },
    {
      id: 'hayam-wuruk',
      title: 'Hayam Wuruk',
      image: '/images/Hayam Wuruk.jpg',
      content: `
        <p>Hayam Wuruk (Kawi: Sanskerta: हयम वरुक; 1334–1389), juga disebut Rajasanagara, Pata-na-pa-na-wu, atau Bhatara Prabhu setelah tahun 1350, adalah Maharaja keempat dari Majapahit, yang memerintah pada tahun 1350 sampai kematiannya pada tahun 1389.</p>
        
        <h3>Asal-usul dan silsilah</h3>
        <p>Nama Hayam Wuruk artinya "ayam yang terpelajar". Ia adalah putra pasangan Tribhuwana Tunggadewi (penguasa ketiga Majapahit) putri Raden Wijaya pendiri Majapahit, dengan Sri Kertawardhana alias Cakradhara yang berkedudukan sebagai penguasa Tumapel.</p>
        
        <h3>Masa pemerintahan</h3>
        <p>Pada tahun 1350, Prabu Hayam Wuruk naik tahta dalam usia relatif muda, 16 tahun, menggantikan ibundanya, Tribhuwana Tunggadewi. Tribhuwana sebenarnya memerintah Majapahit "mewakili" ibunya Gayatri (Rajapatni), yang memilih menjalani hidup sebagai bhiksuni (pendeta wanita).</p>
        
        <h3>Akhir Hayat</h3>
        <p>Tahun 1389, Prabu Hayam Wuruk meninggal dengan dua anak, Kusumawardhani putri dari Sri Sudewi, dan Bhre Wirabhumi anak dari istri ke-2 nya. Yang menjadi pengganti Prabu Hayam Wuruk adalah anak pertama Beliau Kusumumawarhani menjadi Maharani ke 5 yang dibantu suaminya yaitu Wikramawardhana.</p>
      `
    },
    {
      id: 'kertanegara',
      title: 'Kertanegara',
      image: '/images/kertanegara.jpg',
      content: `
        <p>Sri Maharaja Kertanagara atau disebut Kertanegara meninggal tahun (1292), adalah raja terakhir yang memerintah Kerajaan Singhasari dengan gelar abhiseka Sri Maharajadiraja Kertanagara Wikrama Dharmmottunggadewa. Masa pemerintahan Kertanagara dikenal sebagai masa kejayaan Singhasari.</p>
        
        <h3>Asal-usul</h3>
        <p>Kertanagara memiliki nama asli kelahiran yaitu Nararyya Murddhaja adalah putera dari Wisnuwardhana atau Nararyya Seminingrat, raja Singhasari antara tahun 1248-1268. Ibunya bernama Jayawardhani.</p>
        
        <h3>Masa Pemerintahan</h3>
        <p>Kertanagara naik takhta Singhasari tahun 1268 menggantikan ayahnya, Wisnuwardhana. Berdasarkan Prasasti Padang Roco yang bertarikh 1286, Kertanagara bergelar śrī mahārājādhirāja kŗtanagara wikrama dharmmottunggadewa.</p>
        
        <h3>Penyatuan Hindu Budha</h3>
        <p>Dalam bidang agama, Kertanagara memperkenalkan penyatuan agama Hindu aliran Siwa dengan agama Buddha aliran Tantrayana. Oleh karena itu dalam Pararaton, Kertanagara sering juga disebut Bhatara Siwa Buddha.</p>
      `
    },
    {
      id: 'anusapati',
      title: 'Anusapati',
      image: '/images/anusapati.jpg',
      content: `
        <p>Menurut Pararaton, Anusapati atau disebut juga Panji Anusapati adalah putra pasangan Tunggul Ametung dan Ken Dedes. Ayahnya dibunuh oleh Ken Arok sewaktu dirinya masih berada di dalam kandungan. Ken Arok kemudian menikahi Ken Dedes dan mengambil alih jabatan Tunggul Ametung sebagai akuwu Tumapel.</p>
        
        <h3>Misteri Kematian Anusapati</h3>
        <p>Nama Anusapati hanya terdapat dalam Pararaton dan Nagarakretagama. Naskah Pararaton ditulis ratusan tahun sesudah zaman Tumapel dan Majapahit. Sedangkan Nagarakretagama ditulis pada pertengahan masa kejayaan Majapahit (1365).</p>
        
        <p>Dalam beberapa hal, uraian Nagarakretagama cenderung lebih dapat dipercaya daripada Pararaton, karena waktu penulisannya jauh lebih awal. Jika dalam Pararaton disebutkan Anusapati mati karena dibunuh Tohjaya, maka Nagarakretagama menulis Anusapati mati secara wajar.</p>
      `
    },
    {
      id: 'ken-arok',
      title: 'Ken Arok',
      image: '/images/ken arok.jpg',
      content: `
        <p>Ken Arok atau Sri Ranggah Rajasa atau Sri Girinathaputra lahir di timur Gunung Kawi pada tahun 1182, wafat di istana Tumapel, Kutaraja pada tahun 1227, adalah pendiri dari Wangsa Rajasa dan Kerajaan Tumapel yang lebih dikenal dengan nama Kerajaan Singhasari.</p>
        
        <h3>Silsilah</h3>
        <p>Raja Jenggala yang pada awal tahun 1194M menggempur Panjalu Kediri adalah Sri Maharaja Girindra, ayah dari Putri Sasi Kirana. Raja Jenggala ini disebut pula sebagai Sri Maharaja Jayamerta Sang Girindratama Girinatha wiswarupakumara, raja yang menganut agama Siwa.</p>
        
        <h3>Pendirian Kerajaan Tumapel</h3>
        <p>Pada tahun 1221 terjadi perselisihan antara Kertajaya raja Kadiri dengan para brahmana. Para brahmana itu memilih pindah ke Tumapel meminta perlindungan Ken Arok karena diserang oleh Kertajaya. Dengan adanya kesempatan itu dan di dukung oleh para kaum brahmana, Ken Arok pun memberontak dan mempersiapkan penyerangan terhadap Kerajaan Kediri.</p>
      `
    }
  ];

  return (
    <>
      <Head>
        <title>Sejarah Indonesia - Portfolio Website</title>
        <meta name="description" content="Jelajahi sejarah kerajaan-kerajaan di Jawa dan Indonesia" />
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
                <i className="fas fa-history" style={{ color: 'white', fontSize: '18px' }}></i>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                textShadow: '0 2px 10px rgba(249, 115, 22, 0.3)'
              }}>
                Sejarah Majapahit
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
              <a href="#kings" style={{
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
                Raja-raja
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
          background: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('/images/srj.jpg')`,
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
              Sejarah Kerajaan
              <br />
              <span style={{ color: 'white' }}>Majapahit</span>
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#9ca3af',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: '1.6'
            }}>
              Jelajahi sejarah lengkap kerajaan Majapahit, dari berdirinya hingga kejayaannya sebagai kerajaan terbesar di Nusantara
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {sejarahData.map((item) => (
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

        {/* Kings Section */}
        <section id="kings" style={{
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
            }}>Raja-raja Majapahit</h2>
            
            <div style={{
              display: 'grid',
              gap: '32px'
            }}>
              {sejarahData.map((item) => (
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
                      <div
                        style={{
                          color: '#d1d5db',
                          lineHeight: '1.8',
                          fontSize: '16px'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: expandedStory === item.id ? item.content : item.content.split('</p>')[0] + '</p>'
                        }}
                      />
                      
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
                          marginTop: '20px',
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
              &copy; 2024 Sejarah Majapahit. Dibuat dengan ❤️ untuk melestarikan sejarah Indonesia.
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
          
          h3 {
            color: #f97316 !important;
            font-size: 20px !important;
            font-weight: 600 !important;
            margin: 24px 0 12px 0 !important;
          }
          
          p {
            margin-bottom: 16px !important;
          }
        `}</style>
      </div>
    </>
  );
} 