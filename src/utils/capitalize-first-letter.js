/**
 * @param {string|undefined} [string] lowercase
 * @returns {string|void} capitalized
 */
export function capitalizeFirstLetter (string) {

    if (typeof string === 'undefined') return

    return string.charAt (0).toUpperCase () + string.slice (1)

}
