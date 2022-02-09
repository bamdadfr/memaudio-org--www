/**
 * Capitalize the first letter of a string
 *
 * @param {string|undefined} [string] - The string to capitalize
 * @returns {string|undefined} - The capitalized string
 */
export function capitalizeFirstLetter(string) {
  if (typeof string === 'undefined') {
    return;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
