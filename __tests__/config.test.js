const fs = require('fs');
const config = require('../src/config/index');

test('config file is initialised', async () => {
  await config();

  const outputPath = './tailwind.config.js';
  expect(fs.existsSync(outputPath)).toBe(true);
});
