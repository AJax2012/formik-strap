const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('rollup-plugin-postcss');
const replace = require('@rollup/plugin-replace');


module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );

    config.plugins.push(
      replace({
        'process.env.NODE_ENV': JSON.stringify(options.env),
        preventAssignment: true,
      })
    );

    return config;
  },
};
