module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#ff0000', // Rouge pour correspondre au logo provisoire
          secondary: '#2563eb', // Bleu pour contraste
          dark: '#1e293b',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }