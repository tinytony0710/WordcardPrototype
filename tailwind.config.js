/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    // colors: {
    //   "gray": "#D9D9D9",
    //   "gray-light": "#EAEAEA",
    //   "gray-dark": "#929191",
    //   "pony-sunset-shimmer": "#2ECEC8",
    // },
    extend: {
      fontFamily: {
        "funny": ["Comic Sans MS", "cursive"],
        "yahooJP": ["メイリオ", "Hiragino Kaku Gothic Pro", "Meiryo", "ヒラギノ角ゴ Pro W3", "MS PGothic", "MS UI Gothic", "Helvetica", "Arial", "sans-serif"],
      }
    },
  },
  plugins: [],
}
