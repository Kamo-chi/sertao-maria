import Carousel from './Carousel'

export default function Hero({ bgClass = 'relative bg-gradient-to-r from-[#F5F5F5] to-[#F0E4D1] text-gray-900', textClass = 'text-gray-900', heightClass = 'h-96 md:h-[520px]', images = null, interval = 6000 }) {
  const defaultImages = [
    { src: 'images/Carousel/Carrosel1.jpg', alt: 'Paisagem 1' },
    { src: 'images/Carousel/Carrosel2.jpg', alt: 'Paisagem 2' },
    { src: 'images/Carousel/Carrosel3.jpg', alt: 'Paisagem 3' },
    { src: 'images/Carousel/Carrosel4.jpg', alt: 'Paisagem 4' },
    { src: 'images/Carousel/Carrosel5.jpg', alt: 'Paisagem 5' }
  ];

  return (
    <section id="hero" className={`${bgClass} ${heightClass} ${textClass}`}>
      <h1
        className="absolute top-6 left-1/2 -translate-x-1/2 z-50 font-extrabold pointer-events-none whitespace-nowrap"
        style={{ fontSize: 'clamp(1.25rem, 4vw, 2.5rem)' }}
      >
      </h1>
      <div className="absolute inset-0">
        <Carousel images={images ?? defaultImages} interval={interval} />
      </div>
    </section>
  )
}
