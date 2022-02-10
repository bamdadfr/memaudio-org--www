import {fetchApi} from './fetch-api';

/**
 * Fetch levels from the API
 */
export async function fetchLevels(world: string): Promise<string[]> {
  return await fetchApi(`/api/world/${world}/levels`) as string[];
}
