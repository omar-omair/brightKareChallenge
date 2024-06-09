/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sub_gray: "#C6C6C6",
        icon_bg: "#F3F9FD",
        outer_ellipse: "#D6EAF8",
        weekDay: "#1F618D",
        selectedDay: '#004080'
      }
    },
  },
  plugins: [],
}

