import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Sıcak Kahveler',
    kicker: 'Single Origin & Blend',
    items: [
      { name: 'Lumen Signature Espresso', desc: 'Tek origin, kadifemsi krema, narin kakao', price: '180' },
      { name: 'Double Ristretto', desc: 'Yoğun, konsantre, güçlü bitiş', price: '160' },
      { name: 'Flat White', desc: 'Mikro köpük, dengeli süt ve espresso', price: '195' },
      { name: 'Cortado', desc: 'Eşit oran süt ve espresso, temiz his', price: '175' },
      { name: 'Filtre Kahve', desc: 'Günlük değişen single origin, pour-over', price: '145' },
    ],
  },
  {
    title: 'Soğuk İçecekler',
    kicker: 'Cold & Refreshing',
    items: [
      { name: 'Solis Cold Brew', desc: '18 saat demleme, amber tonlar, ferah bitiş', price: '165' },
      { name: 'Nitro Cold Brew', desc: 'Azotlu kadife doku, soğuk sunum', price: '185' },
      { name: 'Iced Latte', desc: 'Taze espresso, soğuk süt, buz', price: '190' },
      { name: 'Cold Brew Tonic', desc: 'Tonik suyu ve cold brew, hafif köpüklü', price: '200' },
    ],
  },
  {
    title: 'Butik Tatlılar',
    kicker: 'Günlük Seçki',
    items: [
      { name: 'Anatolian Cream', desc: 'Malatya kayısısı, vanilya kreması, ince badem', price: '240' },
      { name: 'Bordo Kadife Tart', desc: 'Bordo çikolata ganaj, gevrek kabuk', price: '220' },
      { name: 'Fıstıklı Baklava Cheesecake', desc: 'Yerel fıstık, hafif ekşi krem peyniri', price: '260' },
      { name: 'Seasonal Panna Cotta', desc: 'Mevsim meyvesiyle, vanilya', price: '200' },
    ],
  },
  {
    title: 'Çaylar & Diğer',
    kicker: 'Çay Seçkisi',
    items: [
      { name: 'Malatya Elma Çayı', desc: 'Yerel elma, hafif baharat', price: '120' },
      { name: 'Earl Grey Suprême', desc: 'Bergamot, siyah çay, çiçek', price: '130' },
      { name: 'Taze Nane Limon', desc: 'Taze sıkım, nane, doğal', price: '110' },
      { name: 'Matcha Latte', desc: 'Seremoni kalite matcha, sıcak süt', price: '210' },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-kicker">İmza Seçki</p>
          <h1 className="page-title">Menü</h1>
          <p className="page-subtitle">
            Her içecek ve tatlı, özenle seçilmiş malzemeler ve rafine bir servis anlayışıyla hazırlanır.
          </p>
        </div>
        <div className="page-hero-deco" aria-hidden="true" />
      </section>

      {/* Menu Categories */}
      <section className="menu-full-section">
        <div className="menu-full-inner">
          {categories.map((cat) => (
            <div className="menu-category" key={cat.title}>
              <div className="menu-category-header">
                <p className="section-kicker">{cat.kicker}</p>
                <h2>{cat.title}</h2>
              </div>
              <div className="menu-full-grid">
                {cat.items.map((item) => (
                  <div className="menu-full-item" key={item.name}>
                    <div>
                      <h3 className="menu-item-name">{item.name}</h3>
                      <p className="menu-item-desc">{item.desc}</p>
                    </div>
                    <span className="menu-item-price">{item.price} ₺</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <p className="section-kicker">Rezervasyon</p>
          <h2>Masanızı ayırtın.</h2>
          <p>Açılış döneminde özel rezervasyonlar için iletişime geçin.</p>
          <Link className="primary-button" to="/rezervasyon">
            Rezervasyon Yap <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
