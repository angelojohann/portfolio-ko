/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg)",
        ink: "var(--text)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        warm: "var(--warm)",
        panel: "var(--panel)",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Manrope"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 28px 90px -42px rgba(16, 24, 44, 0.32)",
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
