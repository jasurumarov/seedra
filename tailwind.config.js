/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '16px',
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1142px",
    },
    extend: {
      colors: {
        colorBlack: "#1F2533",
        colorGray: "#333333",
        colorGreen: "#359740"
      },
      boxShadow: {
        shadowHeader: '0px 4px 12px 0px #CFCFCF40',
        shadowFooter: '0px -7px 80px 0px #BDBDBD40',
        shadowMenu: '0 3px 5px #0002',
        shadowBacktop: '4px 4px 12px 2px #00000033'
      },
    },
    fontFamily: {
      lexand: ['Lexand'],
      lexand500: ['Lexand500'],
      lexand600: ['Lexand600'],
      lexand700: ['Lexand700'],
    }
  },
  plugins: [],
}