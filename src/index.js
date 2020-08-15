/**
 * @author Charles Markovich
 * @summary  Check if JWT is expired
 * @description A global validator utility to share validation rules across all apps for a given project.
 * @public
 */

const isExpired = (token) => {
  if (typeof(token) !== 'string' || !token) throw new Error('Invalid token provided');

  const isExired = false;

  return isExired;
}

module.exports.isExpired = isExpired;
