export default function Premiacoes(){
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-20">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold">Premiações</h1>
          <p className="mt-2 text-gray-100">Reconhecimentos e prêmios recebidos pelo projeto.</p>
        </div>
      </section>

      <main className="py-12">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <section className="bg-gray-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Nossas premiações</h2>
            <p className="text-gray-700">Aqui iremos listar as premiações, eventos e reconhecimentos. A página segue o estilo da Home e está pronta para conteúdo SSG ou estático.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
