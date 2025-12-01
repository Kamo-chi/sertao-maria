import CharactersCarousel from './CharactersCarousel'
import characters from '../data/characters'

export default function Characters() {
    return (
        <section id="personagens" className="py-12">
          <div className="mx-auto px-6 max-w-screen-2xl">
            <CharactersCarousel cards={characters} />
          </div>
        </section>
    )
}