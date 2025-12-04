import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      message: form.message,
    };

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Mensagem enviada com sucesso!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar mensagem");
    }
  };

  return (
<section id="contato" className="bg-indigo-600 text-white py-20">
  <div className="mx-auto px-6 max-w-screen-2xl">

    <h2 className="text-3xl font-bold mb-8">Contato</h2>

    {/* GRID NO DESKTOP */}
    <div className="md:grid md:grid-cols-2 md:gap-20 md:items-start">

      {/* --- FORMULÁRIO --- */}
      <form className="max-w-xl mb-10 md:mb-0" onSubmit={handleSubmit}>
        <label className="block mb-2">
          <span className="text-sm">Nome</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 text-gray-800"
            placeholder="Seu nome"
          />
        </label>

        <label className="block mb-2">
          <span className="text-sm">Email</span>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 text-gray-800"
            placeholder="seu@exemplo.com"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Mensagem</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded px-3 py-2 text-gray-800"
            rows="4"
            placeholder="Escreva sua mensagem"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-white text-indigo-700 px-4 py-2 rounded font-semibold"
        >
          Enviar
        </button>
      </form>

      {/* --- INFORMAÇÕES DE CONTATO --- */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold mb-8">Fale conosco</h2>

        <div className="flex items-center gap-3">
          <Mail size={26} />
          <a href="mailto:contato@sertaomaria.org" className="hover:underline text-lg">
            contato@sertaomaria.org
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={26} />
          <a href="https://wa.me/55999999999" target="_blank" className="hover:underline text-lg">
            (99) 99999-9999
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Instagram size={26} />
          <a href="https://instagram.com/sertaomaria" target="_blank" className="hover:underline text-lg">
            @sertaomaria
          </a>
        </div>
      </div>

    </div>

  </div>
</section>

  );
}
