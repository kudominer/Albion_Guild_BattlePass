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
        albion: {
          gold: '#e5b842',
          goldDark: '#b8860b',
          goldLight: '#fde047',
          dark: '#0b0f19',
          card: '#131b2e',
          cardHover: '#1c2742',
          border: '#2a3654',
          accent: '#8b5cf6',
          ruby: '#e11d48',
          emerald: '#10b981',
          silver: '#94a3b8',
        }
      },
      fontFamily: {
        game: ['Cinzel', 'Montserrat', 'Inter', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(229, 184, 66, 0.45)',
        'ruby-glow': '0 0 25px rgba(225, 29, 72, 0.5)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle at 50% 0%, rgba(229, 184, 66, 0.15) 0%, transparent 70%)',
        'radial-card': 'radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.95) 100%)',
      }
    },
  },
  plugins: [],
};
