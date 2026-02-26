import { useMemo } from 'react'

interface Vine {
  id: number
  path: string
  x: number
  delay: number
  duration: number
  opacity: number
}

function generateVinePath(startX: number, height: number): string {
  const segments = 6 + Math.floor(Math.random() * 4)
  const segmentHeight = height / segments
  let path = `M ${startX} 0`
  let currentX = startX

  for (let i = 1; i <= segments; i++) {
    const controlX = currentX + (Math.random() - 0.5) * 60
    const endX = currentX + (Math.random() - 0.5) * 40
    const y = i * segmentHeight
    path += ` Q ${controlX} ${y - segmentHeight / 2} ${endX} ${y}`
    currentX = endX
  }

  return path
}

export default function VineBackground() {
  const vines = useMemo<Vine[]>(() => {
    const result: Vine[] = []
    const positions = [5, 12, 88, 95]

    positions.forEach((x, i) => {
      result.push({
        id: i,
        path: generateVinePath(0, 100),
        x,
        delay: i * 0.5,
        duration: 10 + Math.random() * 4,
        opacity: 0.15 + Math.random() * 0.1,
      })
    })

    return result
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {vines.map((vine) => (
        <svg
          key={vine.id}
          className="absolute top-0 h-full animate-sway"
          style={{
            left: `${vine.x}%`,
            width: '80px',
            animationDelay: `${vine.delay}s`,
            animationDuration: `${vine.duration}s`,
            opacity: vine.opacity,
            transformOrigin: 'top center',
          }}
          viewBox="0 0 80 100"
          preserveAspectRatio="none"
        >
          <path
            d={vine.path}
            fill="none"
            stroke="url(#vineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#4ade80" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      ))}

      {/* Subtle leaf clusters */}
      <div
        className="absolute top-20 left-[8%] w-16 h-16 rounded-full bg-accent-green/5 blur-2xl"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute top-40 right-[6%] w-20 h-20 rounded-full bg-accent-emerald/5 blur-2xl"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-32 left-[4%] w-24 h-24 rounded-full bg-accent-green/5 blur-3xl"
      />
    </div>
  )
}
