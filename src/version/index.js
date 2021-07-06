var pjson = require('../../package.json');

const run = async () => {
  return pjson.version;
};

module.exports = run;
