#!/usr/bin/env node

const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

// The main organ grinder
module.exports = () => {
  const inputPath = path.join(__dirname, `../tokens/default/config.js`);
  const outputPath = './blyth.config.js';

  fs.copyFile(inputPath, outputPath, (err) => {
    if (err) throw err;
    console.log(chalk.green('Config initialised!'));
  });
};
