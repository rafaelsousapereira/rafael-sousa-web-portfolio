/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Mulish", sans-serif'],
      icon: ["Tac One"]
    },
    extend: {
      maxHeight: {
        '0': '0',
      },
      scrollbar: {
        none: 'none',
      },
    },
  },
  plugins: [],
}

