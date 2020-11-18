#!/usr/bin/env node

const chalk = require('chalk');
let utility = require('./utility/index.js');
let tokens = require('./tokens/index.js');

// The main organ grinder
const init = () => {
  switch (process.argv[2]) {
    case 'utility':
      utility();
      break;
    case 'tokens':
      tokens();
      break;
    default:
      console.log(chalk.red("Couldn't find that command"));
      break;
  }
};

init();
