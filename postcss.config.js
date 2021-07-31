const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = (ctx) => {
  return {
    plugins: [
      require('autoprefixer'),
      ...(ctx.mode === 'production'
        ? [
            purgecss({
              content: ['./_site/**/*.html'],
              css: ['./_src/styles/css/*.css'],
              safelist: {
                deep: [/webshare$/, /turbolinks/, /:lang/],
              },
            }),
          ]
        : []),
      require('csswring'),
    ],
  };
};
