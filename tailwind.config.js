/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "card-color": "var(--card-color)",
        error: "var(--error)",
        "input-color": "var(--input-color)",
        primary: "var(--primary)",
        darkslategray: "#093545",
        white: "#fff",
        "input-color": "#224957",
        primary: "#2bd17e",
      },
      borderRadius: {
        "3xs": "10px",
      },
      fontFamily: {
        "body-extra-small": "var(--body-extra-small-font-family)",
        "body-large": "var(--body-large-font-family)",
        "body-regular": "var(--body-regular-font-family)",
        "body-small": "var(--body-small-font-family)",
        caption: "var(--caption-font-family)",
        h1: "var(--h1-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        h4: "var(--h4-font-family)",
        h5: "var(--h5-font-family)",
        h6: "var(--h6-font-family)",
      },
    },
  },
  plugins: [],
};
