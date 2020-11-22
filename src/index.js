#!/usr/bin/env node

const chalk = require('chalk');
let utility = require('./utility/index.js');
let config = require('./config/index.js');
let tokens = require('./tokens/index.js');

// The main organ grinder
const init = () => {
  console.log(process.argv[2]);
  switch (process.argv[2]) {
    case 'config':
      config();
      break;
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
