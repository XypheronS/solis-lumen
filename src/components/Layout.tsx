import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import whiteLogo from '../../img/Artboard 1.png';
import fullBurgundyLogo from '../../img/Artboard 5.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const location = useLocation();

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-active' : '';

  return (
    <main className="site-shell">
      {/* Ambient Background */}
      <div className="ambient-bg" aria-hidden="true">
        <span className="ambient-orb" />
        <span className="ambient-orb" />
        <span className="ambient-orb" />
        <span className="ambient-orb" />
      </div>
      <div className="ambient-grain" aria-hidden="true" />

      {/* Topbar */}
      <header className="topbar">
        <Link className="brand-lockup" to="/" aria-label="Solis Lumen ana sayfa">
          <img src={whiteLogo} alt="Solis Lumen" />
        </Link>

        <nav
          className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'}
          aria-label="Ana menü"
        >
          <NavLink to="/menu" className={navClass} onClick={closeMenu}>Menü</NavLink>
          <NavLink to="/hikayemiz" className={navClass} onClick={closeMenu}>Hikayemiz</NavLink>
          <NavLink to="/galeri" className={navClass} onClick={closeMenu}>Galeri</NavLink>
          <NavLink to="/rezervasyon" className={navClass} onClick={closeMenu}>İletişim</NavLink>
        </nav>

        <Link className="reservation-link" to="/rezervasyon">
          Rezervasyon
          <ArrowRight size={14} aria-hidden="true" />
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Page Content */}
      {children}

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <img src={fullBurgundyLogo} alt="Solis Lumen" />
          <div className="footer-tagline">
            <p>Premium kafe deneyimi</p>
            <span>Malatya'da yakında</span>
          </div>
          <div className="footer-links">
            <NavLink to="/menu" onClick={closeMenu}>Menü</NavLink>
            <NavLink to="/hikayemiz" onClick={closeMenu}>Hikayemiz</NavLink>
            <NavLink to="/galeri" onClick={closeMenu}>Galeri</NavLink>
            <a href="mailto:info@solislumen.com">info@solislumen.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Solis Lumen. Tüm hakları saklıdır.</span>
          <span>Malatya, Türkiye</span>
        </div>
      </footer>
    </main>
  );
}
