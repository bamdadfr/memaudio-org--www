/**
 * Fetch API wrapper
 */
export async function fetchApi(query: string): Promise<unknown> {
  const response = await fetch(query);
  const {success, data} = await response.json();

  if (success) {
    return data;
  }
}
