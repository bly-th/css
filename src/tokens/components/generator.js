/**
 * Takes the config an optional array of targets and an
 * optional prefix which generates a CSS string of
 * utility classes
 *
 * @param {Object} config The blyth config object
 * @param {Array} targets
 * @param {String} prefix=''
 * @returns {String}
 */
module.exports = (config, targets, prefix = '') => {
  let response = '';

  Object.entries(config.tokens).forEach((token) => {
    Object.entries(token[1].items).forEach((tokenItem) => {
      if (!targets || (targets && token[1][targets])) {
        if (token[1].property) {
          response += `
          .${prefix}${token[0]}-${tokenItem[0]} {
            ${token[1].property}: ${tokenItem[1]}; 
          }`.trim();
        }
      }
    });
  });

  return response;
};
