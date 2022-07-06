const fs = require('fs');
const composition = require('../src/composition/index');

const projectConfig = require('../src/helpers/project-config.js')();
const outputPath = projectConfig.compositionOutputPath;

test('composition file is generated', async () => {
  await composition(['grid']);
  expect(fs.existsSync(`${outputPath}/grid.css`)).toBe(true);
});

test('chained utility first file is generated', async () => {
  await composition(['grid', 'stack']);
  expect(fs.existsSync(`${outputPath}/grid.css`)).toBe(true);
});

test('chained utility second file is generated', async () => {
  await composition(['grid', 'stack']);
  expect(fs.existsSync(`${outputPath}/stack.css`)).toBe(true);
});
