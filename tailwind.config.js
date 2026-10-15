/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#080812',
          secondary: '#101020',
          card: '#151529',
        },
        accent: {
          DEFAULT: '#7C3AED',
          primary: '#7C3AED',
          secondary: '#A855F7',
          highlight: '#22D3EE',
          electric: '#A855F7',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#A1A1B8',
        },
        brand: {
          purple: '#7C3AED',
          violet: '#A855F7',
          cyan: '#22D3EE',
          dark: '#080812',
          card: '#151529',
        }
      },
      fontFamily: {
        general: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        sora: ['"Sora"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
