import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import AboutUs from './components/AboutUs'
import Characters from './components/Characters'
import News from './components/News'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Noticias from './pages/Noticias'
import Parcerias from './pages/Parcerias'
import Premiacoes from './pages/Premiacoes'
import Sobre from './pages/Sobre'


function HomeSections() {
  return (
    <>
      <section id="hero" className="relative bg-gradient-to-r from-sky-500 to-indigo-600 text-white h-96 md:h-[520px]">
        <h1
          className="absolute top-6 left-1/2 -translate-x-1/2 z-50 font-extrabold text-white pointer-events-none whitespace-nowrap"
          style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }}
        >
          Sertão Maria
        </h1>
        <div className="absolute inset-0">
          <Carousel
            images={[
              { src: 'https://picsum.photos/id/1018/1600/900', alt: 'Paisagem 1' },
              { src: 'https://picsum.photos/id/1025/1600/900', alt: 'Paisagem 2' },
              { src: 'https://picsum.photos/id/1037/1600/900', alt: 'Paisagem 3' },
            ]}
            interval={6000}
          />
        </div>
      </section>

      <AboutUs />
      <Characters />
      <News />
      <Awards />
      <Contact />
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
            <Route path="/parcerias" element={<Parcerias />} />
            <Route path="/premiacoes" element={<Premiacoes />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
