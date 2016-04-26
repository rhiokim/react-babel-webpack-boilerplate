var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.plugins = [];
webpackConfig.externals = {
  'cheerio': 'window',
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS', 'Chrome'],

    // karma only needs to know about the test bundle
    files: [
      'tests.bundle.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    frameworks: ['mocha'],
    // plugins: [
    //   'karma-chrome-launcher',
    //   'karma-mocha',
    //   'karma-sourcemap-loader',
    //   'karma-webpack',
    // ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'tests.bundle.js': ['webpack', 'sourcemap', 'coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage',
    reporters: ['progress', 'jenkins', 'coverage', 'dots'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'lcovonly', subdir: '.', file: 'lcov.info' },
        { type: 'html', subdir: 'html' }
      ]
    },

    jenkinsReporter: {
      outputFile: 'coverage/test-results.xml',
      suite: '',                 // this will be mapped to the package
      classnameSuffix: 'browser-test'
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
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO
  });
};
