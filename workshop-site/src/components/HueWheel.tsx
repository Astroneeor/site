import { useCallback, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { useThemeHue } from '../theme/useThemeHue'

const SIZE = 44
const STROKE = 6
const RADIUS = (SIZE - STROKE) / 2
const CENTER = SIZE / 2

function angleFromEvent(
  event: ReactPointerEvent<SVGSVGElement> | globalThis.PointerEvent,
  svg: SVGSVGElement,
) {
  const rect = svg.getBoundingClientRect()
  const x = (event as globalThis.PointerEvent).clientX - rect.left - rect.width / 2
  const y = (event as globalThis.PointerEvent).clientY - rect.top - rect.height / 2
  let deg = (Math.atan2(y, x) * 180) / Math.PI + 90
  if (deg < 0) deg += 360
  return deg
}

export function HueWheel() {
  const { hue, setHue } = useThemeHue()
  const svgRef = useRef<SVGSVGElement>(null)
  const dragging = useRef(false)

  const onPointerDown = useCallback(
    (e: ReactPointerEvent<SVGSVGElement>) => {
      dragging.current = true
      svgRef.current?.setPointerCapture(e.pointerId)
      setHue(angleFromEvent(e, svgRef.current!))
    },
    [setHue],
  )

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<SVGSVGElement>) => {
      if (!dragging.current) return
      setHue(angleFromEvent(e, svgRef.current!))
    },
    [setHue],
  )

  const onPointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  const thumbAngle = ((hue - 90) * Math.PI) / 180
  const tx = CENTER + RADIUS * Math.cos(thumbAngle)
  const ty = CENTER + RADIUS * Math.sin(thumbAngle)

  return (
    <svg
      ref={svgRef}
      className="hue-wheel"
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      role="slider"
      aria-label="Theme hue"
      aria-valuenow={Math.round(hue)}
      aria-valuemin={0}
      aria-valuemax={360}
      tabIndex={0}
    >
      <defs>
        <linearGradient id="hueGrad" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="hsl(0,80%,55%)" />
          <stop offset="16%" stopColor="hsl(60,80%,55%)" />
          <stop offset="33%" stopColor="hsl(120,80%,55%)" />
          <stop offset="50%" stopColor="hsl(180,80%,55%)" />
          <stop offset="66%" stopColor="hsl(240,80%,55%)" />
          <stop offset="83%" stopColor="hsl(300,80%,55%)" />
          <stop offset="100%" stopColor="hsl(360,80%,55%)" />
        </linearGradient>
      </defs>
      <circle
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        fill="none"
        stroke="url(#hueGrad)"
        strokeWidth={STROKE}
        opacity={0.85}
      />
      <circle cx={tx} cy={ty} r={5} fill={`hsl(${hue},70%,60%)`} stroke="#fff" strokeWidth={1.5} />
    </svg>
  )
}
