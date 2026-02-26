import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  baseOpacity: number
  phase: number
  speed: number
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Particle[] = []
    let lastTime = 0
    const targetFPS = 24
    const frameInterval = 1000 / targetFPS

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const count = Math.min(30, Math.floor((canvas.width * canvas.height) / 50000))

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          baseOpacity: Math.random() * 0.3 + 0.1,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.2 + 0.05,
        })
      }
    }

    const draw = (timestamp: number) => {
      if (timestamp - lastTime < frameInterval) {
        animationId = requestAnimationFrame(draw)
        return
      }
      lastTime = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const time = timestamp * 0.001

      for (const p of particles) {
        const flicker = Math.sin(time * p.speed * 3 + p.phase) * 0.4 + 0.6
        const opacity = p.baseOpacity * flicker

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74, 222, 128, ${opacity})`
        ctx.fill()

        p.y += p.speed * 0.15
        p.x += Math.sin(time * 0.5 + p.phase) * 0.08

        if (p.y > canvas.height + 5) {
          p.y = -5
          p.x = Math.random() * canvas.width
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resizeCanvas()
    animationId = requestAnimationFrame(draw)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
