const fs = require('fs');
const tokens = require('../src/tokens/index').run;

const projectConfig = require('../src/helpers/project-config.js')();

test('token file is generated', async () => {
  await tokens();

  const outputPath = projectConfig.tokensOutputPath;
  expect(fs.existsSync(outputPath)).toBe(true);
});
