import Separator from './ui/Separator'
import news from '../data/news'

export default function NewsList({ bgClass = '', textClass = '' }) {
  const items = news && news.length > 0 ? news.slice(0, 3) : [];

  return (
    <section id="noticias-list" className={`${bgClass} ${textClass}`}>
      <div className="mx-auto px-6 max-w-screen-2xl">
        <Separator />

        <div className="mt-6">
          {items.length === 0 && (
            <p className="text-gray-700">Nenhuma notícia disponível no momento.</p>
          )}

          {items.map((n) => (
            <article key={n.id} className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{n.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{n.sectionSubtitle}</p>
                  </div>
                  <time className="text-sm text-gray-500">{n.date}</time>
                </div>

                <div className="mt-4 text-gray-700 leading-relaxed">
                  {n.content}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
