/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        bannerSocios: 'url("../../public/bannerSocios.jpg")',
      },
      colors: {
        qjred: '#D6001C',
        qjblue: '#0050B5',
        qjyellow: '#F2A341',
        qjwhite: '#F2F1E4',
        qjblack: '#0D0D0D',
      },
      height: {
        100: '40rem',
        125: '50rem',
      },
      flexGrow: {
        2: '2',
      },
      screens: {
        'max-md': { max: '767px' },
      },
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
