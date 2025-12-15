// Characters (Section Wrapper)
// Purpose: Section-level wrapper that places the characters carousel on the
// page and provides it with the application's character data. This file
// imports the presentational carousel component and passes the `characters`
// data (from `src/data/characters.js`). Keep layout/data responsibilities
// here so the carousel component itself remains reusable.
import CharactersCarousel from './CharactersCarousel'
import characters from '../data/characters'

export default function Characters({ bgClass = '', textClass = '' }) {
    return (
        <section id="personagens" className={`${bgClass} py-12 ${textClass}`}>
          <div className="mx-auto px-6 max-w-screen-2xl">
            <h2 className="text-3xl font-bold mb-6">Personagens</h2>
            <CharactersCarousel cards={characters} />
          </div>
        </section>
    )
}