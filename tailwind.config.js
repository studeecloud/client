module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'dark-gray': '#313131',
      'deep-purple': '#31121a',
      plum: '#830f4c',
      teal: '#016668',
      coral: '#f38181',
      gold: '#ffcb92',
      meringue: '#fef9e8',
    },
    extend: {},
    fontFamily: {
      display: ['Bungee Shade', 'cursive'],
      // note that Major Mono Display does not take kindly to capital letters
      header: ['Major Mono Display', 'monospace'],
      accent: ['Roboto Mono', 'monospace'],
      body: ['Nunito', 'sans-serif'],
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
  },
};
