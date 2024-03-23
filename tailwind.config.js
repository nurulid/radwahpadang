/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        'primary': "#CA2D0E", // red
        'primaryLight': "#FFD4CC", // light soft red
        'secondary': "#007475", // green
        'graytext': "#656565" // gray
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

