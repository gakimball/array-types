var isArray = require('is-array');
var pushUnique = require('push-unique');

/**
 * Gets the types of the values of an array.
 * @param {Array} array - Array to check.
 * @returns {String|String[]} If one type is found, type as a string. If multiple types are found, types as an array of strings.
 */
module.exports = function arrayTypes(array) {
  if (!isArray(array)) {
    throw new Error('is-array: argument must be an array.');
  }

  // Final output
  var types = [];

  // Iterate through each value in the array and check its type
  array.map(function(value) {
    switch (typeof value) {
      // Account for edge cases with objects
      case 'object': {
        if (isArray(value)) {
          pushUnique(types, 'array');
        }
        else if (value === null) {
          pushUnique(types, 'null');
        }
        else {
          pushUnique(types, 'object');
        }
        break;
      }
      default: {
        pushUnique(types, typeof value);
      }
    }
  });

  // Return a single type as a string instead of an array
  if (types.length === 1) {
    return types[0];
  }
  else {
    return types;
  }
}
