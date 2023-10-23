/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          "Open Sans, sans-serif",
        ],
        titillium: [
          "Titillium Web, sans-serif",
        ],
      },
      colors: {
        alert: '#DC1F2E',
        info: '#FF5000',
        warning: '#F8BE15',
        success: '#6EBE49',
        body: '#4E4E4E',
        alternate: '#7C7C7C',
        muted: '#AFAFAF',
        separator: '#DDDDDD',
        light: "#EFEFEF",
        dark: "#212121"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

