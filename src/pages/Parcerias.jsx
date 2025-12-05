export default function Parcerias(){
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-20">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold">Parcerias</h1>
          <p className="mt-2 text-gray-100">Organizações e parceiros que apoiam o projeto.</p>
        </div>
      </section>

      <main className="py-12">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <section className="bg-gray-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Nossas parcerias</h2>
            <p className="text-gray-700">Aqui iremos listar as parcerias, com logos, descrições e links. Esta página segue o mesmo padrão de estilo da Home e está pronta para ser preenchida via dados estáticos ou Markdown/SSG no futuro.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
