import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../../img/Artboard 2.png';

const menuHighlights = [
  { name: 'Lumen Signature', tag: 'En Çok Tercih Edilen', detail: 'Tek origin espresso, kadifemsi krema ve narin kakao dokunusu.', price: '180', num: '01' },
  { name: 'Anatolian Cream', tag: 'Şef Önerisi', detail: 'Malatya kayısısı, vanilya kreması ve ince badem katmanı.', price: '240', num: '02' },
  { name: 'Solis Cold Brew', tag: 'Sezonluk Seçki', detail: '18 saat demleme, amber tonlar ve dengeli ferah bitiş.', price: '165', num: '03' },
];

const rituals = [
  'Sessiz ve rafine servis anlayışı',
  'Günlük butik tatlı seçimi',
  'Özenle kurgulanmış kahve reçeteleri',
  'Malatya merkezde premium atmosfer',
];

export default function Home() {
  return (
    <>
      {/* Hero — Drinkify-inspired split */}
      <section className="hero" id="hero">
        <div className="hero-copy">
          <p className="eyebrow">Malatya'da yakında açılıyor</p>
          <h1>Solis<br /><em>Lumen</em></h1>
          <p className="hero-text">
            Kahvenin ritmini, zarif servisle ve sakin bir lüks duygusuyla buluşturan
            yeni nesil kafe deneyimi.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/menu">
              Seçkiyi İncele <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link className="text-button" to="/hikayemiz">
              Hikayemiz <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src={heroImg} alt="Solis Lumen kafe iç mekan" />
          <div className="hero-visual-overlay" aria-hidden="true" />
        </div>
      </section>

      {/* Intro Band */}
      <section className="intro-band">
        <div className="intro-grid">
          <div>
            <p className="section-kicker">Sade, derin, özenli</p>
            <h2>Lüksü gösterişten değil, dengeden alan bir kafe.</h2>
          </div>
          <p>
            Solis Lumen; bordo, krem ve siyah tonların sakinliğiyle tasarlanan,
            kalabalık dekor yerine kaliteli malzeme, iyi kahve ve temiz servis
            akışı vadeden bir buluşma noktası.
          </p>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="menu-section" id="menu">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Seçili tatlar</p>
            <h2>İmza menüden ilk notalar</h2>
          </div>
          <Link className="text-button" to="/menu">
            Tüm menüyü gör <ArrowRight size={14} />
          </Link>
        </div>
        <div className="menu-grid">
          {menuHighlights.map((item) => (
            <article className="menu-card" key={item.name}>
              <div>
                <span className="menu-card-number" aria-hidden="true">{item.num}</span>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>
              <div className="menu-card-footer">
                <span className="menu-card-price">{item.price} ₺</span>
                <span className="menu-card-tag">{item.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="experience-section" id="experience">
        <div className="experience-copy">
          <p className="section-kicker">Deneyim</p>
          <h2>Az detay, çok his.</h2>
          <p>
            İçeride hedeflenen duygu net: yumuşak ışık, geniş masa aralıkları,
            dikkatli servis ve acelettirmeyen bir atmosfer.
          </p>
        </div>
        <div className="ritual-list">
          {rituals.map((r) => (
            <div className="ritual-item" key={r}>
              <Sparkles size={15} aria-hidden="true" />
              <span>{r}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
