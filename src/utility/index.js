const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const projectConfig = require('../helpers/project-config.js')();

module.exports = () => {
  const tokens = process.argv.slice(4);

  tokens.forEach((token) => {
    const inputPath = path.join(__dirname, `css/${token}.css`);
    const outputPath = `${projectConfig.utilityOutputPath}/${token}.css`;

    if (!fs.existsSync(inputPath)) {
      console.log(chalk.red("Utility doesn't exist"));
      return;
    }

    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath.replace(/[^\/]*$/, ''), { recursive: true });
    }

    fs.copyFile(inputPath, outputPath, (err) => {
      if (err) throw err;
    });
  });

  console.log(chalk.green('Utility classes generated!'));
};
