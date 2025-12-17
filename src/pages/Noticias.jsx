import NewsList from '../components/NewsList'

export default function Noticias() {
  return (
    <div className="min-h-screen bg-white">
      {/* Small hero consistent with Home */}
      <section className="bg-gradient-to-r from-[#F5F5F5] to-[#F0E4D1] text-gray-900 py-20">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold">Notícias</h1>
          <p className="mt-2 text-gray-700">Todas as notícias do projeto Sertão Maria.</p>
        </div>
      </section>

      <main className="py-12">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <NewsList />
        </div>
      </main>
    </div>
  )
}
