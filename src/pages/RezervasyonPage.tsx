import { useState } from 'react';
import { MapPin, Clock3, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function RezervasyonPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', date: '', guests: '2' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-kicker">İletişim</p>
          <h1 className="page-title">Rezervasyon</h1>
          <p className="page-subtitle">
            Açılış döneminde masa rezervasyonu ve iş birliği talepleri için bizimle iletişime geçin.
          </p>
        </div>
        <div className="page-hero-deco" aria-hidden="true" />
      </section>

      {/* Contact Layout */}
      <section className="contact-section">
        <div className="contact-grid">

          {/* Info Panel */}
          <div className="contact-info">
            <p className="section-kicker">Bize Ulaşın</p>
            <h2>Her soru için buradayız.</h2>
            <p className="contact-info-text">
              Solis Lumen açılış öncesi dönemde rezervasyon listesi oluşturmaktadır.
              Formdan ya da doğrudan iletişim kanallarımızdan ulaşabilirsiniz.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="location-detail-icon"><MapPin size={18} /></div>
                <div>
                  <strong>Adres</strong>
                  <span>Malatya, Türkiye<br />(Net adres açılışta duyurulacak)</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="location-detail-icon"><Clock3 size={18} /></div>
                <div>
                  <strong>Çalışma Saatleri</strong>
                  <span>Pazartesi – Pazar<br />08:00 – 22:00</span>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="location-detail-icon"><Mail size={18} /></div>
                <div>
                  <strong>E-posta</strong>
                  <a href="mailto:info@solislumen.com">info@solislumen.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="location-detail-icon"><Phone size={18} /></div>
                <div>
                  <strong>Telefon</strong>
                  <span>Açılışta aktif olacak</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="contact-form-panel">
            {sent ? (
              <div className="form-success">
                <CheckCircle2 size={48} />
                <h3>Mesajınız alındı.</h3>
                <p>En kısa sürede size geri dönüş yapacağız. Solis Lumen'i tercih ettiğiniz için teşekkürler.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Ad Soyad</label>
                    <input id="name" name="name" type="text" placeholder="Adınız" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-posta</label>
                    <input id="email" name="email" type="email" placeholder="mail@ornek.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input id="phone" name="phone" type="tel" placeholder="0 5xx xxx xx xx" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Kişi Sayısı</label>
                    <select id="guests" name="guests" value={form.guests} onChange={handleChange}>
                      {['1','2','3','4','5','6','7','8+'].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Tercih Edilen Tarih</label>
                  <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea id="message" name="message" rows={4} placeholder="Rezervasyon talebi, özel istek veya sorularınız…" value={form.message} onChange={handleChange} />
                </div>
                <button className="primary-button form-submit" type="submit">
                  <Send size={16} />
                  Gönder
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
