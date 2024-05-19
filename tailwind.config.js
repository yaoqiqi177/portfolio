/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'almond-frost': {
          50: '#f5f3f1',
          100: '#e6e1db',
          200: '#cfc3b9',
          300: '#b3a091',
          400: '#9d8372',
          500: '#967969',
          600: '#7a5f54',
          700: '#634b45',
          800: '#55413e',
          900: '#4a3a39',
          950: '#2a1e1e'
        }
      }
    }
  },
  plugins: []
}
