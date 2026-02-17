const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  
};
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        noxa: ["Noxa", "sans-serif"],
      },
    },
  },
};

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        neza: ["var(--font-neza)"],
      },
    },
  },
};


export default config;
