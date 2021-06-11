const fs = require('fs');
const utility = require('../src/utility/index');

const projectConfig = require('../src/helpers/project-config.js')();

test('utility file is generated', async () => {
  await utility(['reset']);

  const outputPath = projectConfig.utilityOutputPath;
  expect(fs.existsSync(`${outputPath}/auto-grid.css`)).toBe(true);
});

test('chained utility first file is generated', async () => {
  await utility(['auto-grid', 'reset']);

  const outputPath = projectConfig.utilityOutputPath;
  expect(fs.existsSync(`${outputPath}/auto-grid.css`)).toBe(true);
});

test('chained utility second file is generated', async () => {
  await utility(['auto-grid', 'reset']);

  const outputPath = projectConfig.utilityOutputPath;
  expect(fs.existsSync(`${outputPath}/reset.css`)).toBe(true);
});
