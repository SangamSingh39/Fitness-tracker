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
        gym: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#111111',
          800: '#171717',
          750: '#1F1F1F',
          700: '#262626',
          600: '#3F3F46',
          500: '#52525B',
          400: '#71717A',
          300: '#A1A1AA',
          200: '#E4E4E7',
          100: '#F4F4F5',
        },
        accent: {
          gold: '#F59E0B',
          'gold-light': '#FCD34D',
          'gold-dark': '#B45309',
          green: '#10B981',
          'green-light': '#34D399',
          red: '#EF4444',
          'red-light': '#F87171',
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Roboto Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px -3px rgba(245, 158, 11, 0.35)',
        'green-glow': '0 0 20px -3px rgba(16, 185, 129, 0.35)',
        'blue-glow': '0 0 20px -3px rgba(59, 130, 246, 0.35)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-short': 'bounce 0.5s ease-in-out 2',
      }
    },
  },
  plugins: [],
}
