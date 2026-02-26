/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#030806',
          900: '#051a0f',
          800: '#0a2618',
          700: '#103322',
          600: '#1a4a32',
        },
        accent: {
          green: '#4ade80',
          emerald: '#34d399',
          lime: '#a3e635',
          glow: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sway': 'sway 8s ease-in-out infinite',
        'grow': 'grow 12s ease-in-out infinite',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        grow: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.02)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
