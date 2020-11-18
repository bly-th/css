#!/usr/bin/env node

const chalk = require('chalk');
const CleanCSS = require('clean-css');
const fs = require('fs');
const shell = require('shelljs');

const customProperties = require('./components/custom-properties.js');
const generator = require('./components/generator.js');
const config = require('../helpers/token-config.js')();
const projectConfig = require('../helpers/project-config.js')();

// The main organ grinder
module.exports = () => {
  let css = '';
  const cleanCSS = new CleanCSS();

  // Bail out if the path isn't defined
  if (!projectConfig || !projectConfig.hasOwnProperty('tokensOutputPath')) {
    console.log(chalk.red(`Please determine a path. You can do this by setting 'outputPath' in your config.`));
    console.log(chalk.blue('Exiting.'));
    return;
  }

  const outputPath = projectConfig.tokensOutputPath;

  // The path has to contain a filename so we need to bail if that's not the case
  if (outputPath.indexOf('.css') < 0) {
    console.log(chalk.red(`Please add a css file to your path.`));
    console.log(chalk.red(`Example: path/to/my/folder/tokens.css`));
    console.log(chalk.blue('Exiting.'));
    return;
  }

  // Add the custom props and the media query-less clases
  css += customProperties(config);
  css += generator(config, ['responsive', 'standard']);

  // If there's some breakpoints, generate the classes that are responsive
  Object.keys(config.theme.breakpoints).forEach((key) => {
    css += `
      @media (min-width: ${config.theme.breakpoints[key]}) {
        ${generator(config, ['responsive'], `${key}\\:`)}
      }
    `.trim();
  });

  css = cleanCSS.minify(css).styles;

  // Create the directory if it doesn't already exist
  if (!fs.existsSync(outputPath)) {
    shell.exec(`mkdir -p ${outputPath.replace(/[^\/]*$/, '')}`);
  }

  shell.exec(`echo "${css}" > ${outputPath}`);

  console.log(chalk.green('Token utility classes generated!'));
};
