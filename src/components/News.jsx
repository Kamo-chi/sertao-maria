import Separator from './ui/Separator'
import news from '../data/news'

export default function News() {
    const first = (news && news.length > 0) ? news[0] : null
    return (
        <section id="noticias" className="bg-gray-50 py-20">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <header className="mb-6">
              {/* Section title (independent of the news content) */}
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Notícias</h2>
            </header>

            <div className="mt-2">
              {/* News item title and subtitle (from data array) */}
              <h3 className="text-xl font-semibold mb-2">{first ? first.title : 'Título da notícia'}</h3>
              <h4 className="text-base md:text-lg text-gray-600 font-medium mb-4">{first ? first.sectionSubtitle : 'Resumo breve da notícia ou subtítulo descritivo.'}</h4>

              {/* Separator (uses the small ui component to mimic shadcn) */}
              <Separator />

              {/* News content — kept inside same container width as CharactersCarousel */}
              <article className="mt-4 bg-white rounded-lg shadow px-6 py-6">
                <p className="text-gray-700">{first ? first.content : 'Nenhuma notícia disponível no momento.'}</p>
              </article>
            </div>
          </div>
        </section>
    )
}