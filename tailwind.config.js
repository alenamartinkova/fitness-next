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
    colors: {
      black: '#343434',
      white: '#fff',
      grey: '#EDEDED',
      pink: '#FF8080',
    },
    extend: {
      backgroundImage: {
        'footer-klarka': "url('../public/footer-klarka.jpeg')",
        'about-me-klarka': "url('../public/about-me.jpeg')",
        'education-klarka': "url('../public/education-1.jpeg')",
        'education-2-klarka': "url('../public/education-2.jpeg')",
      },
      width: {
        unset: 'unset',
      },
    },
  },
  plugins: [],
}