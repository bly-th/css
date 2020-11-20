const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const chalk = require('chalk');

const projectConfig = require('../helpers/project-config.js')();

module.exports = () => {
  const inputPath = path.join(__dirname, `css/${process.argv[4]}.css`);
  const outputPath = `${projectConfig.utilityOutputPath}/${process.argv[4]}.css`;

  if (!fs.existsSync(inputPath)) {
    console.log(chalk.red("Utility doesn't exist"));
    return;
  }

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath.replace(/[^\/]*$/, ''));
  }

  fs.copyFile(inputPath, outputPath, (err) => {
    if (err) throw err;
    console.log(chalk.green('Utility classes generated!'));
  });
};
