#!/usr/bin/env node

const chalk = require('chalk');
let utility = require('./utility/index.js');
let config = require('./config/index.js');
let tokens = require('./tokens/index.js');

// The main organ grinder
const init = async () => {
  switch (process.argv[2]) {
    case 'config':
      try {
        await config();
        console.log(chalk.green('Config initialised!'));
      } catch (error) {
        console.log(chalk.red(error));
      }
      break;
    case 'utility':
      try {
        const tokens = process.argv.slice(4);
        await utility(tokens);
        console.log(chalk.green('Utility classes generated!'));
      } catch (error) {
        console.log(chalk.red(error));
      }
      break;
    case 'tokens':
      try {
        await tokens();
        console.log(chalk.green('Tokens generated!'));
      } catch (error) {
        console.log(chalk.red(error));
      }
      break;
    default:
      console.log(chalk.red("Couldn't find that command"));
      break;
  }
};

init();
