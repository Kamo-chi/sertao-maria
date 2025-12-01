import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import AboutUs from './components/AboutUs'
import Characters from './components/Characters'
import News from './components/News'
import Awards from './components/Awards'
import Contact from './components/Contact'


export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <Header />
      <main className="flex-grow">

        <section id="hero" className="relative bg-gradient-to-r from-sky-500 to-indigo-600 text-white h-96 md:h-[520px]">
          {/* Title centered at top */}
            <h1
              className="absolute top-6 left-1/2 -translate-x-1/2 z-50 font-extrabold text-white pointer-events-none whitespace-nowrap"
              style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }}
            >
              Sertão Maria
            </h1>
          {/* Carousel fills the section */}
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

      </main>
      <Footer />
    </div>
  )
}
