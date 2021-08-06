import { fetchApi } from './fetch-api'

/**
 * @param {string} world world key
 * @returns {object} api response
 */
export async function fetchFirstLevel (world) {

    return await fetchApi (`/api/${world}/levels/first`)

}