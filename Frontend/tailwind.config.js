/** @type {import('tailwindcss').Config} */

const myConstants = require('./src/indexes/constants')

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
        sub_title: "#626262",
        picked: "#0D5FB7",
      },

      width: {
        mobile: `${myConstants.MOBILE_W}rem`,
        desktop: `${myConstants.DESKTOP_W}rem`,
      },

      minWidth: {
        mobile: `${myConstants.MOBILE_W}rem`,
        desktop: `${myConstants.DESKTOP_W}rem`,
      }
    },
  },
  plugins: [],
}

