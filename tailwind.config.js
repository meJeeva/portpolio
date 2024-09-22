module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      fontFamily: {
        outfit: ["outfit", "sans-serif"],
        poppins: ["Poppins", "system - ui"],
      },
      animation: {
        spin_slow: "spin 6s linear infinite",
      },
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F"
      },
      boxShadow: {
        black: "4px_4px_0_#000",
        white: "4px_4px_0_#fff",
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
};
