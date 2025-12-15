export default function Partners({ bgClass = 'bg-white', textClass = '' }) {
  const partners = [
    '/images/partners/Agentes.svg',
    '/images/partners/Art Sonora.svg',
    '/images/partners/Ass. N. S. Aparecida.svg',
    '/images/partners/Bordando Esperança.svg',
    '/images/partners/Célia Helena.svg',
    '/images/partners/Centro Cultural.svg',
    '/images/partners/Comitês de Cultura.svg',
    '/images/partners/Fundação Itaú.svg',
    '/images/partners/Ministério.svg',
    '/images/partners/OPAS.svg',
    '/images/partners/SECULT.svg',
    '/images/partners/Sertão Vivo.svg',
    '/images/partners/Vozes.svg'
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
