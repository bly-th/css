const path = require('path');
const fs = require('fs');

const run = async () => {
  const inputPath = path.join(__dirname, `../tokens/default/config.js`);
  const outputPath = './tailwind.config.js';

  await fs.promises.copyFile(inputPath, outputPath);
};

module.exports = run;
