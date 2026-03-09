/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#0f172a',
        accent: '#06b6d4',
        surface: '#f8fafc',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -16px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(115deg, #2563eb 0%, #06b6d4 45%, #4f46e5 100%)',
      },
    },
  },
  plugins: [],
}
