const { fromCamelCase, capitalizeEveryWord } = require('../lib/helper/string');

/**
 * @param {Array} fields
 *
 * @description
 */
const paramCheck = fields => (req, res, next) => {
  const { body } = req;
  const emptyFields = [];

  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    if (!body[field]) {
      emptyFields.push(capitalizeEveryWord(fromCamelCase(field)));
    }
  }

  if (emptyFields.length === 0) {
    return next();
  }

  return res.status(400).json({
    message: `${emptyFields.join(', ')} is can't be empty.`,
  });
};

module.exports = paramCheck;
