import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Characters from './components/Characters'
import News from './components/News'
import Awards from './components/Awards'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Noticias from './pages/Noticias'
import Sobre from './pages/Sobre'


function HomeSections() {
  return (
    <>
      <Hero />

      <AboutUs bgClass="bg-gradient-to-r from-[#F5F5F5] to-[#F0E4D1]" />
      <Characters bgClass="bg-gradient-to-r from-[#FFFFFF] to-[#F5EDE0]" />
      <News bgClass="bg-gradient-to-r from-[#F5F5F5] to-[#F0E4D1]" />
      <Awards bgClass="bg-gradient-to-r from-[#FFFFFF] to-[#F5EDE0]" />
      <Partners bgClass="bg-gradient-to-r from-[#F5F5F5] to-[#F0E4D1]" />
      <Contact bgClass="bg-gradient-to-r from-[#D7B784] to-[#D7B784]" textClass="text-gray-800" />
    </>
  )
}

export default function App() {
  // Scroll-to-hash helper: when location changes, if there's a hash, scroll to that element.
  function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
      if (!hash) return;
      const id = hash.replace('#', '');
      // Try to find element immediately; if not found (render timing), try again shortly.
      const attempt = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };
      // first attempt
      attempt();
      // second attempt in case element wasn't in DOM yet
      const t = setTimeout(attempt, 120);
      return () => clearTimeout(t);
    }, [hash, pathname]);

    return null;
  }
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col text-gray-800">
        <Header />
        <ScrollToHash />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeSections />} />
            <Route path="/noticias" element={<Noticias />} />
            
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
