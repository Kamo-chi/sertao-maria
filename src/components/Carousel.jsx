import { useState, useEffect, useRef } from 'react'

// Simple image carousel. Props:
// - images: array of { src, alt }
// Behavior:
// - shows one image at a time, non-active images are dimmed (opacity)
// - bottom indicators are horizontal lines; each line's width = 100 / images.length %
// - clicking an indicator activates that image
// - accessible: indicators are buttons with aria-label and aria-current

export default function Carousel({ images = [], interval = 5000 }) {
  const [active, setActive] = useState(0)
  const [prevActive, setPrevActive] = useState(null)
  const transitionMs = 1000
  const prevTimer = useRef(null)

  // internal setter that preserves previous slide during transition
  const setActiveInternal = (newIndex) => {
    if (newIndex === active) return
    setPrevActive(active)
    setActive(newIndex)
    if (prevTimer.current) clearTimeout(prevTimer.current)
    prevTimer.current = setTimeout(() => {
      setPrevActive(null)
      prevTimer.current = null
    }, transitionMs)
  }

  useEffect(() => {
    if (!interval || images.length <= 1) return
    const t = setInterval(() => {
      setActiveInternal((active + 1) % images.length)
    }, interval)
    return () => clearInterval(t)
  }, [interval, images.length, active])

  useEffect(() => {
    return () => {
      if (prevTimer.current) clearTimeout(prevTimer.current)
    }
  }, [])

  if (!images || images.length === 0) {
    return null
  }

  // helper to compute nearest offset for circular sliding
  const offsetFor = (index) => {
    const len = images.length
    let delta = index - active
    if (delta > len / 2) delta -= len
    if (delta < -len / 2) delta += len
    return delta
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((img, i) => {
        const isActive = i === active
        const isPrev = i === prevActive
        // Crossfade: new image fades in, previous fades out gradually
        const styleOpacity = isActive ? 1 : isPrev ? 0 : 0
        const z = isActive ? 20 : isPrev ? 15 : 10
        return (
          <img
            key={i}
            src={img.src}
            alt={img.alt || `Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease will-change-[opacity]`}
            style={{
              opacity: styleOpacity,
              zIndex: z
            }}
            aria-hidden={isActive ? 'false' : 'true'}
          />
        )
      })}

      {/* Indicators: horizontal lines at the bottom */}
      <div className="absolute left-0 right-0 bottom-4 px-4 z-50">
        <div className="flex w-full">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveInternal(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
              className={`h-1 rounded transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`} 
              style={{
                width: `${100 / images.length}%`,
                background: i === active ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.25)',
                opacity: i === active ? 1 : 0.6
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
