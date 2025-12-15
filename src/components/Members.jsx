import CharactersCarousel from './CharactersCarousel'
import members from '../data/members'

export default function Members({ bgClass = '', textClass = '' }) {
    return (
        <section id="personagens" className={`${bgClass} py-12 ${textClass}`}>
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Personagens</h2>
            <CharactersCarousel cards={members} />
          </div>
        </section>
    )
}