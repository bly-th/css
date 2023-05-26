const {execSync} = require('child_process')

const projectConfig = require('../helpers/project-config.js')();

const run = async () => {
  execSync(`NODE_ENV=production npx tailwindcss -o ${projectConfig.tokensOutputPath}`)
};

module.exports = run;

