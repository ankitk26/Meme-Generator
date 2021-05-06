module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "intro-page": "url('/src/assets/images/intro.jpg')",
      }),
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
