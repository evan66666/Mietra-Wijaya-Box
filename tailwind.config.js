module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        green: { A400: "#28d468" },
        indigo: { 800: "#3a3b7b", 900: "#1e2188", "900_91": "#1e218891" },
        amber: { 300: "#ffce4b", 600: "#fbb700" },
        red: { 200: "#dca67f" },
        orange: { 600: "#d79d00", A100_a2: "#f3d177a2" },
        blue_gray: { 900: "#333333" },
        orange_A100: "#f7d579",
        orange_600_01: "#ce9600",
      },
      boxShadow: { xs: "0px 3px  11px 1px #815aa026" },
      fontFamily: { ubuntu: "Ubuntu", opensans: "Open Sans" },
      opacity: { 0.8: 0.8 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
