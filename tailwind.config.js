/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#1472E7",
      primaryLight: "#1FA0E4",
      primaryDark: "#03196B",
      secondary: "#F59E0B",
      secondaryLight: "#FBBF24",
      secondaryDark: "#D97706",
      graylight: "#D4D4D4",
      grayDark: "#525252",
      mybackground: "#FFFBF2",
      darktext: "#171717",
      whitetext: "#F8FAFC",
      mygreen: "#22C55E",
      red: "#EF4444",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "500",
      bold: "600",
    },
  },
  plugins: [],
};
