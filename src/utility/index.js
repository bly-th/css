const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const projectConfig = require('../helpers/project-config.js')();

const run = async (tokenNames) => {
  if (tokenNames.length) {
    tokenNames.forEach(async (token) => {
      const inputPath = path.join(__dirname, `css/${token}.css`);
      const outputPath = `${projectConfig.utilityOutputPath}/${token}.css`;

      if (!fs.existsSync(inputPath)) {
        console.log(chalk.red("Utility doesn't exist"));
        return;
      }

      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath.replace(/[^\/]*$/, ''), { recursive: true });
      }

      await fs.promises.copyFile(inputPath, outputPath);
      console.log(chalk.green('Utility classes generated!'));
    });
  }
};

module.exports = async () => {
  const tokens = process.argv.slice(4);

  await run(tokens);
};

module.exports.run = run;
