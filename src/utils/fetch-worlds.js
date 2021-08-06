import { fetchApi } from './fetch-api'

/**
 * @returns {object} api response
 */
export async function fetchWorlds () {

    return await fetchApi ('/api/worlds')

}