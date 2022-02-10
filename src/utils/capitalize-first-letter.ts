/**
 * Capitalize the first letter of a string
 */
export function capitalizeFirstLetter(string: string): string | undefined {
  if (typeof string === 'undefined') {
    return;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
