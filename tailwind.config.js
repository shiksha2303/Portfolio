/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0B0F17',
          secondary: '#111726',
          tertiary: '#182138',
          card: '#0F1626'
        },
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
          light: '#22D3EE',
          dark: '#0E7490',
          muted: 'rgba(6, 182, 212, 0.15)'
        },
        accent2: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          muted: 'rgba(59, 130, 246, 0.15)'
        },
        slate: {
          850: '#141D2F',
          925: '#0B111E',
          950: '#070B12'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace']
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.35)',
        'glass-hover': '0 10px 40px -10px rgba(6, 182, 212, 0.2)',
        'accent-glow': '0 0 25px -5px rgba(6, 182, 212, 0.3)'
      },
      borderColor: {
        subtle: 'rgba(255, 255, 255, 0.08)',
        subtleHover: 'rgba(6, 182, 212, 0.3)'
      }
    },
  },
  plugins: [],
}
