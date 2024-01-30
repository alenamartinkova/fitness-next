/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'footer-klarka': "url('../src/footer-klarka.jpeg')",
        'about-me-klarka': "url('../src/about-me.jpeg')",
        'education-klarka': "url('../src/education-1.jpeg')",
        'education-2-klarka': "url('../src/education-2.jpeg')",
      },
      width: {
        unset: 'unset',
      },
      colors: {
        black: '#343434',
        white: '#fff',
        grey: '#EDEDED',
        pink: '#FF8080',
      },
    },
  },
  plugins: [],
}