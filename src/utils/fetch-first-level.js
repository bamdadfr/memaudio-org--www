import { fetchApi } from './fetch-api';

/**
 * Fetch first level of data from API
 *
 * @param {string} world - World name
 * @returns {object} - Promise resolving to first level of data
 */
export async function fetchFirstLevel (world) {
  return await fetchApi (`/api/world/${world}/levels/first`);
}
