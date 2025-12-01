import react from "react";

export default function Contact() {
    return (
                <section id="contato" className="bg-indigo-600 text-white py-20">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-4">Contato</h2>
            <form className="max-w-2xl">
              <label className="block mb-2">
                <span className="text-sm">Nome</span>
                <input className="mt-1 block w-full rounded px-3 py-2 text-gray-800" placeholder="Seu nome" />
              </label>
              <label className="block mb-2">
                <span className="text-sm">Email</span>
                <input className="mt-1 block w-full rounded px-3 py-2 text-gray-800" placeholder="seu@exemplo.com" />
              </label>
              <label className="block mb-4">
                <span className="text-sm">Mensagem</span>
                <textarea className="mt-1 block w-full rounded px-3 py-2 text-gray-800" rows="4" placeholder="Escreva sua mensagem"></textarea>
              </label>
              <button type="submit" className="bg-white text-indigo-700 px-4 py-2 rounded font-semibold">Enviar</button>
            </form>
          </div>
        </section>
    )
}