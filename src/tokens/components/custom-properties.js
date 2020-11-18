/**
 * Generates CSS Custom Properties for colors, fonts and size scale
 *
 * @param {Object} config
 * @returns {String}
 */
module.exports = (config) => {
  let response = '';
  const tokens = Object.entries(config.tokens).filter((item) => item[1].variable == true);

  // Loops each option and if that config exists, it generates custom properties
  tokens.forEach((token) => {
    Object.entries(token[1].items).forEach((tokenItem) => {
      response += `--${token[0]}-${tokenItem[0]}: ${tokenItem[1]};`;
    });
  });

  // If we generated some props, wrap them in a :root selector
  if (response.length) {
    response = `:root {
      ${response}
    }`;
  }

  return response;
};
