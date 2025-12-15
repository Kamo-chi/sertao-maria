export default function Partners({ bgClass = 'bg-white', textClass = '' }) {
  const partners = [
    '/images/partner1.png',
    '/images/partner2.png',
    '/images/partner3.png',
    '/images/partner4.png',
    '/images/partner5.png',
    '/images/partner6.png'
  ];

  return (
    <section id="parcerias" className={`${bgClass} py-12 ${textClass}`}>
      <div className="mx-auto px-6 max-w-screen-2xl">
        <h2 className="text-3xl font-bold mb-4">Parcerias</h2>
        <p className="text-gray-600 mb-6">Organizações e parceiros que apoiam o projeto.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
          {partners.map((src, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-gray-50 rounded">
              <img src={src} alt={`Parceiro ${i + 1}`} className="max-h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
