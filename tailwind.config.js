/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '4rem',
          lg: '6rem',
          xl: '8rem'
        }
      },
      fontFamily: {
        logoFont: ['Advertising-Script', 'serif'],
        header: ['Austen', 'serif'],
        body: ['Racoti', 'san-serif'],
        'body-thin': ['Racoti-thin', 'san-serif']
      }
    }
  },
  plugins: []
}
