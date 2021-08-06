/**
 * @param {string} query api route
 * @returns {object} api response
 */
export async function fetchApi (query) {

    const response = await fetch (query)
    const { success, data } = await response.json ()

    if (success) return data

}