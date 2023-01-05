module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      scale: {
        100: "1",
        101: "1.01",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
};
