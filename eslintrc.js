require('ts-node').register({
    project: './tsconfig.json'
  });
  
  module.exports = require('./eslint.config.ts').default;
  