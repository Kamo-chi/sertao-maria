import { useState } from 'react'
import Separator from './ui/Separator'
import news from '../data/news'

export default function NewsList({ bgClass = '', textClass = '', perPage = 6 }) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil((news?.length || 0) / perPage))

  const start = (page - 1) * perPage
  const items = news && news.length > 0 ? news.slice(start, start + perPage) : []

  function goTo(p) {
    const next = Math.min(Math.max(1, p), totalPages)
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex flex-col items-center">
              <p className="text-sm text-gray-600 mb-2 text-center">Esta navegação muda apenas a lista de notícias (continua a sequência do array), não a página do site.</p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => goTo(page - 1)}
                  disabled={page === 1}
                  className={`px-3 py-1 rounded ${page === 1 ? 'bg-gray-200 text-gray-500' : 'bg-white border'} shadow-sm`}
                >
                  Anterior
                </button>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const p = i + 1
                  return (
                    <button
                      key={p}
                      onClick={() => goTo(p)}
                      aria-current={page === p ? 'page' : undefined}
                      className={`px-3 py-1 rounded ${page === p ? 'bg-sky-600 text-white' : 'bg-white border text-gray-700'}`}
                    >
                      {p}
                    </button>
                  )
                })}

                <button
                  onClick={() => goTo(page + 1)}
                  disabled={page === totalPages}
                  className={`px-3 py-1 rounded ${page === totalPages ? 'bg-gray-200 text-gray-500' : 'bg-white border'} shadow-sm`}
                >
                  Próxima
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
