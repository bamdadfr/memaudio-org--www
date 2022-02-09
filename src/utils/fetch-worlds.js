import {fetchApi} from './fetch-api';

/**
 * Fetch all worlds from the API
 *
 * @returns {object} - The worlds
 */
export async function fetchWorlds() {
  return await fetchApi('/api/worlds');
}
