const { cosmiconfigSync } = require('cosmiconfig');

module.exports = () => {
  const userConfig = cosmiconfigSync('blyth', { searchPlaces: ['blyth.config.js'] }).search();

  if (userConfig) {
    return userConfig.config;
  } else {
    return require('../tokens/default/config.js');
  }
};
