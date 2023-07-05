/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif']
      }
    },
    animation: {
      'slide-in-top': 'slide-in-top 0.5s ease-in-out forwards',
      'slide-in-bottom': 'slide-in-bottom 0.5s ease-in-out forwards',
      'flip': 'flip 0.5s linear forwards',
      'bounce': 'bounce 0.5s ease-in-out forwards'
    },
    keyframes: {
      'slide-in-top': {
        '0%': { transform: 'translateY(-100px)', opacity: '0' },
        '100%': { transform: 'translateY(0)' },
      },
      'slide-in-bottom': {
        '0%': { transform: 'translateY(50px)', opacity: '0' },
        '100%': { transform: 'translateY(0)' },
      },
      'flip': {
        '0%': { transform: 'rotateX(0deg) rotateY(0deg)'},
        '100%': { transform: 'rotateY(180deg)'}
      },
      'bounce': {
        '0% , 100%': {transform: 'translateY(0)'},
        '50%': {transform:' translateY(-20px)'}
      } 
    },
  },
  plugins: [],
}