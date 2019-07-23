'use strict';

const environment = process.env.NODE_ENV;

switch (environment) {
  case 'production':
    module.exports = require('./config/webpack.config.prod');
    break;
  case 'test':
    module.exports = require('./config/webpack.config.test');
    break;
  case 'webpack-dev-server':
    module.exports = require('./config/webpack.config.dev-server');
    break;
  default:
    module.exports = require('./config/webpack.config.dev');

}
