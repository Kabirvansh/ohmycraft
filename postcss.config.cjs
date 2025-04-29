// postcss.config.cjs
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},  // ← NEW Tailwind PostCSS plugin
    autoprefixer: {},            // ← Autoprefixer
  },
};
