import { useRef, useState, useEffect, useCallback } from 'react'

// CharactersCarousel (Presentational Component)
// Purpose: Renders a horizontal, step-based carousel for character cards.
// Responsibilities:
// - Presentational UI and carousel behavior (measure/translate, autoplay
//   with ping-pong, keyboard navigation, pause-on-hover/focus).
// - Gracefully handles missing or broken images by showing a "Sem imagem"
//   placeholder.
// This component DOES NOT own the data source — pass a `cards` prop with an
// array of objects ({ id, name, href, image }). A default set of placeholder
// characters is used if no `cards` prop is provided.
// default data: 10 cards. You can override by passing a `cards` prop from `App.jsx`.
const DEFAULT_NUM_CARDS = 10
const defaultCharacters = Array.from({ length: DEFAULT_NUM_CARDS }).map((_, i) => ({
  id: `char-${i + 1}`,
  name: `Personagem ${i + 1}`,
  href: `#personagem-${i + 1}`,
  image: `https://picsum.photos/seed/char${i + 1}/800/600`,
}))

export default function CharactersCarousel({ cards = defaultCharacters }) {
  const [paused, setPaused] = useState(false)

    const trackRef = useRef(null)
    const [cardStep, setCardStep] = useState(0) // step index used for translate
    const [cardWidth, setCardWidth] = useState(0)
    const [visibleCount, setVisibleCount] = useState(1)
    const transitionMs = 600
    const pauseTimeoutRef = useRef(null)

    // pause helper: pauses autoplay for `ms` milliseconds
    const triggerPause = useCallback((ms = 5000) => {
      setPaused(true)
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current)
      pauseTimeoutRef.current = setTimeout(() => {
        setPaused(false)
        pauseTimeoutRef.current = null
      }, ms)
    }, [])

    // number of characters and items (comes from `cards` prop)
    const items = cards
    // number of discrete steps (positions) so the last card is fully visible
    const steps = Math.max(1, cards.length - visibleCount + 1)

    // measure card width (including gap) once mounted/resized
    useEffect(() => {
      function measure() {
        const track = trackRef.current
        if (!track) return
        const first = track.children[0]
        if (!first) return
        const gap = 16 // corresponds to gap-4 (1rem) used in markup
        const w = first.offsetWidth + gap
        // how many cards fit fully in the visible track width
        const trackWidth = track.offsetWidth
        const visible = Math.max(1, Math.floor(trackWidth / w))
        setVisibleCount(visible)
        setCardWidth(w)
      }
      measure()
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }, [])

    // autoplay: ping-pong (right until last, then left until first)
    const [direction, setDirection] = useState(1) // 1 = right, -1 = left
    useEffect(() => {
      if (!cardWidth || paused) return
      const id = setInterval(() => {
        setCardStep((s) => {
          const next = s + direction
          if (next >= steps) {
            setDirection(-1)
            return s - 1 // bounce back one
          }
          if (next < 0) {
            setDirection(1)
            return s + 1
          }
          return next
        })
      }, 2000)
      return () => clearInterval(id)
    }, [cardWidth, paused, direction, steps])

    // no reset effect needed for ping-pong behavior

    function prev() {
      setDirection(-1)
      setCardStep((s) => (s <= 0 ? 0 : s - 1))
      triggerPause()
    }

    function next() {
      setDirection(1)
      setCardStep((s) => (s >= steps - 1 ? steps - 1 : s + 1))
      triggerPause()
    }

    const translateX = -(cardStep * cardWidth)

    // cleanup on unmount: clear timers
    useEffect(() => {
      return () => {
        if (pauseTimeoutRef.current) {
          clearTimeout(pauseTimeoutRef.current)
          pauseTimeoutRef.current = null
        }
      }
    }, [])

    // keyboard navigation and hover/focus pause
    useEffect(() => {
      function onKey(e) {
        if (e.key === 'ArrowLeft') {
          prev()
        } else if (e.key === 'ArrowRight') {
          next()
        }
      }
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }, [])

    return (
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          if (!pauseTimeoutRef.current) setPaused(false)
        }}
        onFocus={() => setPaused(true)}
        onBlur={() => {
          if (!pauseTimeoutRef.current) setPaused(false)
        }}
        tabIndex={-1}
      >
        <h3 className="sr-only">Personagens</h3>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 items-stretch px-4 py-2"
            style={{
              transform: `translateX(${isNaN(translateX) ? 0 : translateX}px)`,
              transition: `transform ${transitionMs}ms ease-in-out`,
            }}
            role="list"
          >
            {items.map((c, i) => {
              const raw = c && c.image ? String(c.image).trim() : ''
              const hasImage = Boolean(raw)
              return (
                <a
                  key={`${c.id}-${i}`}
                  href={c.href}
                  role="listitem"
                  className="flex-shrink-0 w-48 md:w-60 h-64 md:h-80 rounded-lg shadow-lg overflow-hidden relative bg-gray-100"
                  aria-label={c.name}
                >
                  {hasImage ? (
                    <>
                      <img
                        src={raw}
                        onError={(e) => {
                          // hide broken image and show text placeholder
                          e.currentTarget.style.display = 'none'
                          const txt = e.currentTarget.nextElementSibling
                          if (txt) txt.style.display = 'flex'
                        }}
                        alt={c.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div style={{ display: 'none' }} className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-700">Sem imagem</div>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-700">Sem imagem</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="relative z-10 p-4 h-full flex items-end">
                    <div className="text-white">
                      <h4 className="font-semibold">{c.name}</h4>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 text-gray-800 shadow flex items-center justify-center hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Próximo"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/90 text-gray-800 shadow flex items-center justify-center hover:bg-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    )
}


