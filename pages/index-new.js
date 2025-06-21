import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio Website - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="home-container">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <div className="logo-icon">
                <i className="fas fa-code"></i>
              </div>
              <span className="logo-text">Portfolio</span>
            </div>
            
            <div className="nav-links">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#features" className="nav-link">Features</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button onClick={() => router.push('/login')} className="login-btn">
                <i className="fas fa-sign-in-alt"></i>
                Login
              </button>
            </div>
            
            <button className="mobile-menu-btn">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </nav>

        <section id="home" className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Selamat Datang di
              <span className="highlight"> Portfolio Website</span>
            </h1>
            <p className="hero-description">
              Jelajahi kekayaan budaya Indonesia melalui konten interaktif yang menarik.
            </p>
            <div className="hero-buttons">
              <button onClick={() => router.push('/register')} className="cta-button primary">
                <i className="fas fa-user-plus"></i>
                Create Account
              </button>
              <button onClick={() => router.push('/login')} className="cta-button secondary">
                <i className="fas fa-sign-in-alt"></i>
                Sign In
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <h2 className="section-title">Tentang Kami</h2>
            <p className="section-description">
              Kami adalah tim yang berdedikasi untuk melestarikan dan memperkenalkan 
              kekayaan budaya Indonesia kepada dunia melalui teknologi modern.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-landmark"></i>
                </div>
                <h3>Sejarah</h3>
                <p>Pelajari sejarah kerajaan-kerajaan di Jawa dan Indonesia</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>Dongeng</h3>
                <p>Kumpulan dongeng dan cerita rakyat Indonesia</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-pen-fancy"></i>
                </div>
                <h3>Puisi</h3>
                <p>Karya sastra dan puisi tradisional Indonesia</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-music"></i>
                </div>
                <h3>Musik</h3>
                <p>Musik tradisional dan instrumen Indonesia</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Portfolio Website. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .home-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
          font-family: 'Poppins', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: rgba(17, 24, 39, 0.95);
          backdrop-filter: blur(10px);
          z-index: 50;
          padding: 20px 0;
          border-bottom: 1px solid rgba(249, 115, 22, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background-color: #f97316;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(249, 115, 22, 0.5);
        }

        .logo-icon i {
          color: white;
          font-size: 18px;
        }

        .logo-text {
          font-size: 20px;
          font-weight: bold;
          color: white;
          text-shadow: 0 2px 10px rgba(249, 115, 22, 0.3);
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          color: #f97316;
          transform: translateY(-2px);
        }

        .login-btn {
          background-color: #f97316;
          color: white;
          padding: 12px 24px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
        }

        .login-btn:hover {
          background-color: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
        }

        .login-btn i {
          margin-right: 8px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 120px 24px 60px;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .highlight {
          color: #f97316;
          text-shadow: 0 2px 10px rgba(249, 115, 22, 0.3);
        }

        .hero-description {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 16px 32px;
          border-radius: 12px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cta-button.primary {
          background-color: #f97316;
          color: white;
          box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
        }

        .cta-button.primary:hover {
          background-color: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
        }

        .cta-button.secondary {
          background-color: transparent;
          color: white;
          border: 2px solid rgba(249, 115, 22, 0.5);
        }

        .cta-button.secondary:hover {
          background-color: rgba(249, 115, 22, 0.1);
          border-color: #f97316;
          transform: translateY(-2px);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          text-align: center;
          margin-bottom: 16px;
        }

        .section-description {
          font-size: 1.125rem;
          color: #d1d5db;
          text-align: center;
          margin-bottom: 60px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .about-section {
          padding: 100px 0;
          position: relative;
          z-index: 2;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .feature-card {
          background-color: rgba(31, 41, 55, 0.8);
          padding: 40px 30px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid rgba(249, 115, 22, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(249, 115, 22, 0.4);
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          background-color: #f97316;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.3);
        }

        .feature-icon i {
          font-size: 32px;
          color: white;
        }

        .feature-card h3 {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: #9ca3af;
          line-height: 1.6;
        }

        .footer {
          background-color: rgba(17, 24, 39, 0.9);
          padding: 40px 0;
          text-align: center;
          border-top: 1px solid rgba(249, 115, 22, 0.2);
          position: relative;
          z-index: 2;
        }

        .footer p {
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .section-title {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .nav-container {
            padding: 0 16px;
          }

          .hero-section {
            padding: 100px 16px 60px;
          }

          .container {
            padding: 0 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .feature-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
} 