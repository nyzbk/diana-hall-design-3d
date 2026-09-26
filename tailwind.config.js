/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'canvas': '#F8F6F2',
          'navy': '#121820',
          'bronze': '#9E7D52',
          'mist': '#EAE7DF',
          'linen': '#FFFFFF',
          'muted': '#7A7873',
          'border': 'rgba(158, 125, 82, 0.16)'
        }
      },
      fontFamily: {
        'display': ['Italiana', 'serif'],
        'body': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
