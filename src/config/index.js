#!/usr/bin/env node

const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const run = async () => {
  const inputPath = path.join(__dirname, `../tokens/default/config.js`);
  const outputPath = './blyth.config.js';

  await fs.promises.copyFile(inputPath, outputPath);
  console.log(chalk.green('Config initialised!'));
};

// The main organ grinder
module.exports = async () => {
  try {
    await run();
  } catch (error) {
    console.log(error);
  }
};

module.exports.run = run;
