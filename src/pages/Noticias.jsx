import News from '../components/News'

export default function Noticias() {
  return (
    <div className="min-h-screen bg-white">
      {/* Small hero consistent with Home */}
      <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-20">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold">Notícias</h1>
          <p className="mt-2 text-gray-100">Todas as notícias do projeto Sertão Maria.</p>
        </div>
      </section>

      <main className="py-12">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <News />
        </div>
      </main>
    </div>
  )
}
