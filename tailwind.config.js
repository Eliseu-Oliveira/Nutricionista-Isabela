/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vinho:    '#5B1A0A',
        terracota:'#7A1F0C',
        'terra-cl':'#9C5E3A',
        bege:     '#E4D3BF',
        marfim:   '#F3EEDF',
        branco:   '#FDFAF5',
      },
      fontFamily: {
        display: ['Cormorant', 'Georgia', 'serif'],
        body:    ['"Glacial Indifference"', 'system-ui', 'sans-serif'],
        titulo:  ['Forum', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
