import Members from "../components/Members"

export default function Sobre(){
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-20">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <h1 className="text-3xl md:text-4xl font-extrabold">Sobre Nós</h1>
          <p className="mt-2 text-gray-100">Conheça a missão, a equipe e a história por trás do Sertão Maria.</p>
        </div>
      </section>

      <main className="py-12">
        <div className="mx-auto px-6 max-w-screen-2xl">
          <section className="bg-gray-50 rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Nossa missão</h2>
            <p className="text-gray-700 mb-4">O projeto Sertão Maria busca conectar histórias, cultura e memória da região, promovendo conteúdo audiovisual e textos que valorizem as vozes locais.</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Equipe</h3>
            <p className="text-gray-700">Pequena equipe de produção, curadoria de conteúdo e suporte técnico. Informações de contato e bios podem ser adicionadas aqui.</p>
          </section>
        </div>

        <Members bgClass="bg-gradient-to-r from-[#F5F5F5] to-[#F0E4D1]" />
      </main>
    </div>
  )
}
