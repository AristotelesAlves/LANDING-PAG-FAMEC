/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-blue-01':'#335DFF',
        'custom-bg':'#E7E7E7'
      },
      backgroundImage:{
        'custom-background':"url('/img/bg-img.png')"
      }
    },
  },
  plugins: [],
}