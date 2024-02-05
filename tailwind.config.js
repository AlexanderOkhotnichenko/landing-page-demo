/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        black: {
          950: '#121215'
        }
      },
      width: {
        '296': '18.5rem'
      },
      maxWidth: {
        '450': '450px',
        '230': '230px',
        '120': '120px',
        '100': '100px'
      },
      height: {
        '61': '60rem'
      },
      inset: {
        '-10%': '-10%',
        '200%': '200%'
      },
      boxShadow: {
        '3xl': '0 0 100px 40px rgba(255, 255, 255, .03)',
        '2md': '0 7px 50px 10px rgba(0, 0, 0, 0.667)',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'out-expo': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      },
      scale: {
        '1-15': '1.015',
      },
      borderColor: {
        'opacity-white': 'rgba(255, 255, 255, 0.267)',
      },
      gridTemplateColumns: {
        'fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'fill-screen': 'repeat(auto-fill, minmax(100%, 1fr))'
      },
      screens: {
        'mm': '320px',
        'mm2': '370px',
        'mm3': '470px',
        'sm2': '651px',
        'lg2': '1080px',
      },
      brightness: {
        '130': '1.3'
      },
    },
  },
  plugins: [],
}