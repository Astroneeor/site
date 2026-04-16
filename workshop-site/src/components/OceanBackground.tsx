import { useThemeHue } from '../theme/useThemeHue'

export function OceanBackground() {
  const { hue } = useThemeHue()

  const deep = `hsl(${hue}, 55%, 6%)`
  const mid = `hsl(${hue}, 45%, 12%)`
  const glow = `hsl(${hue}, 50%, 18%)`
  const surface = `hsl(${hue}, 40%, 22%)`

  return (
    <div className="ocean-bg" aria-hidden>
      <div
        className="ocean-gradient"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 50% 0%, ${glow} 0%, transparent 70%),
            radial-gradient(ellipse 80% 50% at 80% 20%, ${surface}44 0%, transparent 60%),
            radial-gradient(ellipse 100% 80% at 20% 80%, ${mid}88 0%, transparent 50%),
            linear-gradient(180deg, ${deep} 0%, ${mid} 40%, ${deep} 100%)
          `,
        }}
      />
      <svg className="ocean-waves" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          className="wave wave--1"
          fill={`hsl(${hue}, 35%, 14%)`}
          fillOpacity="0.5"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L0,320Z"
        />
        <path
          className="wave wave--2"
          fill={`hsl(${hue}, 40%, 10%)`}
          fillOpacity="0.6"
          d="M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,240C672,235,768,245,864,256C960,267,1056,277,1152,272C1248,267,1344,245,1392,234.7L1440,224L1440,320L0,320Z"
        />
        <path
          className="wave wave--3"
          fill={`hsl(${hue}, 50%, 8%)`}
          fillOpacity="0.7"
          d="M0,288L48,282.7C96,277,192,267,288,266.7C384,267,480,277,576,282.7C672,288,768,288,864,277.3C960,267,1056,245,1152,245.3C1248,245,1344,267,1392,277.3L1440,288L1440,320L0,320Z"
        />
      </svg>
    </div>
  )
}
