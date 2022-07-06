const fs = require('fs');
const tokens = require('../src/tokens/index');

const projectConfig = require('../src/helpers/project-config.js')();
const outputPath = projectConfig.tokensOutputPath;

test('token file is generated', async () => {
  await tokens();

  expect(fs.existsSync(outputPath)).toBe(true);
});
