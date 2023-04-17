const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailSeparator = email.lastIndexOf("@");
  let emailDomain = email.substring(emailSeparator + 1);
  return emailDomain;
}

module.exports = {
  getEmailDomain
};
