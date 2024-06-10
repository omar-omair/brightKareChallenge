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
        selectedDay: '#004080',
        sub_tag: "#8C8C8C",
        cig_bg: "#FF8080",
        side_bar_bg: "#0056B3",
      },

      width: {
        mobile: '27.25rem',
        desktop: `30rem`,
      },

      minWidth: {
        mobile: '27.25rem',
        desktop: `30rem`,
      }
    },
  },
  plugins: [],
}

