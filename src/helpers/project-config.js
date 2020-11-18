const { cosmiconfigSync } = require('cosmiconfig');

module.exports = () => {
  let projectConfig = cosmiconfigSync('blyth').search();

  if (projectConfig) {
    return projectConfig.config;
  }

  return false;
};
