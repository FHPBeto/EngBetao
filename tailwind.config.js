/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#020617",
        neonBlue: "#3b82f6",
        neonEmerald: "#10b981",
      }
    },
  },
  plugins: [],
}