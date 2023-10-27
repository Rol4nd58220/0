/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
  keyframes: {
    chitchat: {
      '0%': { content: '"#"' },
      '5%': { content: '"."' },
      '10%': { content: '"^{ "' },
      '15%': { content: '"-!"' },
      '20%': { content: '"#$_"' },
      '25%': { content: '"№:0"' },
      '30%': { content: '"#{+."' },
      '35%': { content: '"@}-?"' },
      '40%': { content: '"?{4@%"' },
      '45%': { content: '"=.,^!"' },
      '50%': { content: '"?2@%"' },
      '55%': { content: '"\\;1}] "' },
      '60%': { content: '"?{%:% "' },
      '65%': { content: '"|{f[4 "' },
      '70%': { content: '"{4%0%"' },
      '75%': { content: '"\'1_0< "' },
      '80%': { content: '"{0%" ' },
      '85%': { content: '"]>\'"' },
      '90%': { content: '"4 "' },
      '95%': { content: '"2 "' },
      '100%': { content: '""' },
    },
  },
};