/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-bw": "10px 10px 0px #000, -10px -10px 0px #fff",
      },
    },
  },
  plugins: [],
};
