/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'azul-custom':'#3772FF',
        'laranja-custom':'#F75C03',
        'cinza-custom':'#565656',
        'color-home':'#F9F7FF'
      },
      backgroundImage:{
        'home':"url('./img/logo.png')"
      },
      dropShadow:{
        'padrao':'0px 4px 4px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}