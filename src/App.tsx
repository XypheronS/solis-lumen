import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import HikayemizPage from './pages/HikayemizPage';
import GaleriPage from './pages/GaleriPage';
import RezervasyonPage from './pages/RezervasyonPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/menu" element={<Layout><MenuPage /></Layout>} />
        <Route path="/hikayemiz" element={<Layout><HikayemizPage /></Layout>} />
        <Route path="/galeri" element={<Layout><GaleriPage /></Layout>} />
        <Route path="/rezervasyon" element={<Layout><RezervasyonPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
