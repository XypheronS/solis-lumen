import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import img1 from '../../img/Artboard 1.png';
import img2 from '../../img/Artboard 2.png';
import img3 from '../../img/Artboard 3.png';
import img4 from '../../img/Artboard 4.png';
import img5 from '../../img/Artboard 5.png';
import img6 from '../../img/Artboard 5 copy.png';

const galleryItems = [
  { src: img5, caption: 'Marka Kimliği', span: 'large' },
  { src: img2, caption: 'Detay & Doku', span: 'normal' },
  { src: img3, caption: 'Atmosfer', span: 'normal' },
  { src: img1, caption: 'Logo & Renk', span: 'normal' },
  { src: img4, caption: 'Sembol', span: 'normal' },
  { src: img6, caption: 'Alternatif Sunum', span: 'large' },
];

export default function GaleriPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-kicker">Görsel Dünya</p>
          <h1 className="page-title">Galeri</h1>
          <p className="page-subtitle">
            Solis Lumen'in estetik evrenine bir bakış.
          </p>
        </div>
        <div className="page-hero-deco" aria-hidden="true" />
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <figure
              className={`gallery-item${item.span === 'large' ? ' gallery-item--large' : ''}`}
              key={i}
            >
              <div className="gallery-img-wrap">
                <img src={item.src} alt={item.caption} />
                <div className="gallery-overlay">
                  <span>{item.caption}</span>
                </div>
              </div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Atmosphere Text */}
      <section className="atmosphere-section">
        <div className="atmosphere-inner">
          <div>
            <p className="section-kicker">Atmosfer</p>
            <h2>Her köşe, bir his.</h2>
          </div>
          <div>
            <p>
              Solis Lumen tasarımında bordo, krem ve beyazın dengesini buluyorsunuz.
              Sıcaklık ve zarafet bir arada — aydınlık ama samimi, rafine ama erişilebilir.
            </p>
            <p>
              Açılış sonrasında mekan fotoğrafları ve iç mimari görüntüler bu alanda
              düzenli olarak güncellenecektir.
            </p>
            <Link className="text-button" to="/rezervasyon" style={{ marginTop: '8px', display: 'inline-flex' }}>
              Haberdar Ol <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
