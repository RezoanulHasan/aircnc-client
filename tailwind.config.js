/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fire: "fire 0.5s infinite",
        rocket: "rocket 1s forwards",
      },
      keyframes: {
        fire: {
          "0%, 100%": {
            transform: "scaleY(0.8) translateY(-2px)",
            opacity: "0.8",
          },
          "50%": { transform: "scaleY(1.2) translateY(0)", opacity: "1" },
        },
        rocket: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-300px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
