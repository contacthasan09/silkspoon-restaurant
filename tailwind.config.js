/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B5844',
        secondary: '#68a050',
        heading: '#03200C',
        silk: '#b99942',
        soft: '#F3FDE8',
        dark: '#000000',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
      maxWidth: {
        content: '1140px',
      },
      borderRadius: {
        btn: '48px',
        card: '20px',
        input: '6px',
        glass: '15px',
      },
      boxShadow: {
        card: '0 0 15px 0 rgb(221, 221, 221)',
        btn: '0 0 6px 0 rgb(59, 88, 68)',
        soft: '0 10px 30px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
