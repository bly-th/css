#!/usr/bin/env node

const chalk = require('chalk');
const CleanCSS = require('clean-css');
const fs = require('fs');

const customProperties = require('./components/custom-properties.js');
const generator = require('./components/generator.js');
const config = require('../helpers/token-config.js')();
const projectConfig = require('../helpers/project-config.js')();

// The main organ grinder
const run = async () => {
  let css = '';
  const cleanCSS = new CleanCSS();

  // Bail out if the path isn't defined
  if (!projectConfig || !projectConfig.hasOwnProperty('tokensOutputPath')) {
    throw "Please determine a path. You can do this by setting 'outputPath' in your config.";
  }

  const outputPath = projectConfig.tokensOutputPath;

  // The path has to contain a filename so we need to bail if that's not the case
  if (outputPath.indexOf('.css') < 0) {
    throw 'Please add a css file to your path. Example: path/to/my/folder/tokens.css';
  }

  // Add the custom props and the media query-less clases
  css += customProperties(config);
  css += generator(config);

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
    fs.mkdirSync(outputPath.replace(/[^\/]*$/, ''), { recursive: true });
  }

  await fs.promises.writeFile(outputPath, css);
};

module.exports = run;
