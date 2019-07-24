module.exports = function(config) {
     const testWebpackConfig = require('./webpack.config');
   
     const configuration = {
       /**
            * Base path that will be used to resolve all patterns (e.g. files, exclude).
           */
       basePath: '',
   
       /**
            * Frameworks to use
            *
            * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            */
       frameworks: [
         'jasmine'
       ],
   
       browserConsoleLogOptions: {
         level: 'log',
         format: '%b %T: %m',
         terminal: true
       },
   
       client: {
         captureConsole: true
       },
   
       /**
            * List of files / patterns to load in the browser
            *
            * we are building the test environment in ./spec-bundle.js
            */
       files: [
         {pattern: './config/spec-bundle.js', watched: false}
       ],
   
       /**
            * Preprocess matching files before serving them to the browser
            * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            */
       preprocessors: {
         './config/spec-bundle.js': [
           'coverage',
           'webpack',
           'sourcemap'
         ]
       },
   
       /**
            * Webpack Config at ./webpack.test.js
            */
       webpack: testWebpackConfig,
   
       coverageReporter: {
         type: 'in-memory'
       },
   
       remapCoverageReporter: {
         'text-summary': null,
         json: './coverage/coverage.json',
         html: './coverage/html'
       },
   
       /**
            * Test results reporter to use
            *
            * possible values: 'dots', 'progress'
            * available reporters: https://npmjs.org/browse/keyword/karma-reporter
            */
       reporters: [
         'coverage',
         'remap-coverage'
       ],
   
       /**
            * Web server port.
            */
       port: 9876,
   
       /**
            * enable / disable colors in the output (reporters and logs)
            */
       colors: true,
   
       customLaunchers: {
            ChromeDebugging: {
                 base: 'ChromeHeadless',
                 flags: ["--remote-debugging-port=9222"]
            }
       },
       /**
            * Level of logging
            * possible values: config.LOG_DISABLE ||
              * config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            */
   
       /**
            * enable / disable watching file and executing tests whenever any file changes
            */
       autoWatch: false,
   
       /**
            * start these browsers
            * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            */
       browsers: [
         'ChromeDebugging',
         'FirefoxHeadless'
       ],
   
       /**
            * Continuous Integration mode
            * if true, Karma captures browsers, runs the tests and exits
            */
       singleRun: false
   
       /**
            * For slower machines you may need to have a longer browser
            * wait time . Uncomment the line below if required.
            */
       // browserNoActivityTimeout: 30000
     };
   
     config.set(configuration);
   };
   