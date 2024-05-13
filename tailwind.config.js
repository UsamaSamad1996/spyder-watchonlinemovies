/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spyder: ["Syne Mono", "monospace"],
      },
      colors: {
        gray: "#212020",
        red: "#f50f0f",
        whites: "#ffffff",
      },
      backgroundColor: {
        gray: "#212020",
        red: "#f50f0f",
        whites: "#ffffff",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
