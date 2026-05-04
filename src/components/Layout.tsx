import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import whiteLogo from '../../img/Artboard 1.png';
import footerLogo from '../../img/Artboard 5.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const cls = ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '';

  return (
    <main className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand-lockup" aria-label="Solis Lumen ana sayfa" onClick={close}>
          <img src={whiteLogo} alt="Solis Lumen" />
        </Link>

        <nav className={open ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Ana menü">
          <NavLink to="/menu" className={cls} onClick={close}>Menü</NavLink>
          <NavLink to="/hikayemiz" className={cls} onClick={close}>Hikayemiz</NavLink>
          <NavLink to="/galeri" className={cls} onClick={close}>Galeri</NavLink>
          <NavLink to="/rezervasyon" className={cls} onClick={close}>İletişim</NavLink>
        </nav>

        <Link className="reservation-link" to="/rezervasyon">Rezervasyon</Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {children}

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <img src={footerLogo} alt="Solis Lumen" />
          <div className="footer-tagline">
            <p>Premium kafe deneyimi</p>
            <span>Malatya'da yakında</span>
          </div>
          <div className="footer-links">
            <NavLink to="/menu" onClick={close}>Menü</NavLink>
            <NavLink to="/hikayemiz" onClick={close}>Hikayemiz</NavLink>
            <NavLink to="/galeri" onClick={close}>Galeri</NavLink>
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
