import {fetchApi} from './fetch-api';

/**
 * Fetch levels from the API
 *
 * @param {string} world - The world to fetch levels from
 * @returns {object} - The levels
 */
export async function fetchLevels(world) {
  return await fetchApi(`/api/world/${world}/levels`);
}
