/** @type {import('tailwindcss').Config} */

const myConstants = require('./src/indexes/constants')

let desktop2 = parseFloat(myConstants.desktop) * 2


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
        desktop2: `${desktop2}rem`,
        desktop3: `1540px`,
        min_content: 'min-content',
        max_content: 'max-content',
      },

      minWidth: {
        mobile: `${myConstants.MOBILE_W}rem`,
        desktop: `${myConstants.DESKTOP_W}rem`,
      },

      height: {
        desktop1: "1120px",
        desktop2: "1016px"
      }
    },
  },
  plugins: [],
}

