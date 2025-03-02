/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        header_height: "92px",
      },

      colors: {
        "primary-red": "#FF3943",
        "primary-darklight": "#444444",
        "primary-light": "#FFFCF6",
        "primary-fitness": "#47D6AA",
        "primary-wellness": "#9CA1FF",
        "primary-chat": "#FFD580",
        "primary-shop": "#FF9B99",
        "primary-lightblue": "#0fcfe4",
      },
    },
  },
};
