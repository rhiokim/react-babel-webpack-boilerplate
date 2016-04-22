var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.plugins = [];

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    browsers: [ 'Chrome' ],

    // karma only needs to know about the test bundle
    files: [
      'tests.bundle.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    frameworks: [ 'mocha' ],
    // plugins: [
    //   'karma-chrome-launcher',
    //   'karma-mocha',
    //   'karma-sourcemap-loader',
    //   'karma-webpack',
    // ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.bundle.js': [ 'webpack', 'sourcemap', 'coverage' ]
    },

    reporters: [ 'progress', 'coverage', 'dots' ],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
        { type: 'html', subdir: 'html' }
      ]
    },
    singleRun: true,
    // webpack config object
    webpack: webpackConfig,
    // webpack: {
    //   devtool: 'inline-source-map',
    //   module: {
    //     loaders: [
    //       { test: /\.jsx?$/, loader: 'babel-loader' }
    //     ]
    //   }
    // },
    webpackMiddleware: {
      noInfo: true,
    }
  });
};
