export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pr: "#9999FF",
        ae: "#AE7CFF",
        davinci: "#FFB400",
        c4d: "#6CCAFF",
        blender: "#FF7A00",
        ps: "#00C8FF",
      },
      animation: {
        gradientFlow: "gradientMove 6s infinite linear",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
