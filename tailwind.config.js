/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primary': "#CA2D0E",
        'primaryLight': "#FFD4CC",
        'secondary': "#007475",
        'graytext': "#656565"
      },
      keyframes: {
        flip: {
          '0%': {'transform' : 'rotateY(180deg)'}
        }
      },
      animation: {
        flip: 'flip 1s ease'
      }
    },
  },
  plugins: [],
}

