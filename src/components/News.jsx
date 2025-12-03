import { useState, useEffect } from "react";
import Separator from './ui/Separator'
import news from '../data/news'

export default function News() {
  const [index, setIndex] = useState(0);

  // Loop automático
  useEffect(() => {
    if (!news || news.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 5000); // troca a cada 5s

    return () => clearInterval(interval);
  }, [news]);

  const current = news.length > 0 ? news[index] : null;

  return (
    <section id="noticias" className="bg-gray-50 py-20">
      <div className="mx-auto px-6 max-w-screen-2xl">
        <header className="mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Notícias</h2>
        </header>

        <div className="mt-2">

          <h3 className="text-xl font-semibold mb-2">
            {current ? current.title : "Título da notícia"}
          </h3>

          <h4 className="text-base md:text-lg text-gray-600 font-medium mb-4">
            {current ? current.sectionSubtitle : "Resumo breve da notícia ou subtítulo descritivo."}
          </h4>

          <Separator />

          <article className="mt-4 bg-white rounded-lg shadow px-6 py-6">
            <p className="text-gray-700">
              {current ? current.content : "Nenhuma notícia disponível no momento."}
            </p>
          </article>

        </div>
      </div>
    </section>
  );
}