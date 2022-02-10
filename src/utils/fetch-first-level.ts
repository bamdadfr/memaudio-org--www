import {fetchApi} from './fetch-api';

/**
 * Fetch first level of data from API
 */
export async function fetchFirstLevel(world: string): Promise<string> {
  return await fetchApi(`/api/world/${world}/levels/first`) as string;
}
