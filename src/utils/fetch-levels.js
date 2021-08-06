import { fetchApi } from './fetch-api'

/**
 * @param {string} world world key
 * @returns {object} api response
 */
export async function fetchLevels (world) {

    return await fetchApi (`/api/${world}/levels`)

}