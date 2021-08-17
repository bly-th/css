const fs = require('fs');
const path = require('path');

const projectConfig = require('../helpers/project-config.js')();

const run = (tokenNames) => {
  if (tokenNames.length) {
    tokenNames.forEach((token) => {
      const inputPath = path.join(__dirname, `css/${token}.css`);
      const outputPath = `${projectConfig.utilityOutputPath}/${token}.css`;

      if (!fs.existsSync(inputPath)) {
        throw "Utility doesn't exist";
      }

      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath.replace(/[^\/]*$/, ''), { recursive: true });
      }

      fs.copyFileSync(inputPath, outputPath);
    });
  }
};

module.exports = run;
