/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8AA27D',
        'tint-100': '#e8ece5'
      },
      spacing: {
        19: '4.8rem'
      }
    }
  },
  plugins: []
}
