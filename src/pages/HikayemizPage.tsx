import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import burgundyMark from '../../img/Artboard 4.png';

const values = [
  {
    num: '01',
    title: 'Sadelik',
    desc: 'Gösterişten kaçınır, özün gücüne inanırız. Her detay az ama anlamlı seçildi.',
  },
  {
    num: '02',
    title: 'Kalite',
    desc: 'Tedarikten servise kadar uzlaşma yok. Yalnızca doğru olan, yalnızca en iyisi.',
  },
  {
    num: '03',
    title: 'Atmosfer',
    desc: 'Mekân bir his yaratır. Solis Lumen\'de o his: sakin, rafine ve davetkar.',
  },
  {
    num: '04',
    title: 'Malatya',
    desc: 'Şehrimizin özgün kimliğini taşıyoruz. Yerel kök, evrensel dil.',
  },
];

export default function HikayemizPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-kicker">Biz kimiz</p>
          <h1 className="page-title">Hikayemiz</h1>
          <p className="page-subtitle">
            Bir fikrin lükse dönüştüğü yerde başlar her şey.
          </p>
        </div>
        <div className="page-hero-deco" aria-hidden="true" />
      </section>

      {/* Origin Story */}
      <section className="story-section">
        <div className="story-grid">
          <div className="story-mark">
            <img src={burgundyMark} alt="" aria-hidden="true" />
            <div className="story-line" aria-hidden="true" />
          </div>
          <div className="story-content">
            <p className="section-kicker">Başlangıç</p>
            <h2>Solis Lumen nasıl doğdu?</h2>
            <p>
              "Lumen" Latince'de ışık demek. "Solis" ise güneşin. Malatya'nın bereketli
              topraklarında, güneşin en dolu haliyle vurduğu o coğrafyada bir ışık noktası
              olmak istedik.
            </p>
            <p>
              Şehrin merkezinde, aceleyle değil özenle kurgulanmış bir mekân. Kalabalık
              menüler yerine ince seçki. Gürültü yerine sessizlik. Gösteriş yerine denge.
            </p>
            <p>
              Solis Lumen; kahveyi, pastayı ve servisi birer ritüele dönüştüren, misafirini
              yavaşlamaya davet eden yeni nesil bir kafe anlayışıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="values-header">
          <p className="section-kicker">İlkelerimiz</p>
          <h2>Bizi biz yapan dört temel.</h2>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.num}>
              <span className="value-num">{v.num}</span>
              <div className="value-divider" />
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Band */}
      <section className="vision-band">
        <div className="vision-inner">
          <p className="section-kicker" style={{ color: 'var(--gold-light)' }}>Vizyon</p>
          <h2>Malatya'nın en seçkin<br />buluşma noktası.</h2>
          <p>
            Solis Lumen açıldığında yalnızca bir kafe olmayacak — şehrin ritmine
            dahil olan, her ziyarette aynı kaliteyi ve aynı huzuru sunan bir kurum olacak.
          </p>
          <Link className="footer-button" to="/rezervasyon">
            İletişime Geç <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
