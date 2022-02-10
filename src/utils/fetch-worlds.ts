import {fetchApi} from './fetch-api';

/**
 * Fetch all worlds from the API
 */
export async function fetchWorlds(): Promise<string[]> {
  return await fetchApi('/api/worlds') as string[];
}
