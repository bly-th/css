const fs = require('fs');
const utility = require('../src/utility/index');

const projectConfig = require('../src/helpers/project-config.js')();
const outputPath = projectConfig.utilityOutputPath;

test('utility file is generated', async () => {
  await utility(['reset']);
  expect(fs.existsSync(`${outputPath}/reset.css`)).toBe(true);
});

test('chained utility first file is generated', async () => {
  await utility(['embed', 'reset']);
  expect(fs.existsSync(`${outputPath}/embed.css`)).toBe(true);
});

test('chained utility second file is generated', async () => {
  await utility(['embed', 'reset']);
  expect(fs.existsSync(`${outputPath}/reset.css`)).toBe(true);
});
