/**
 * Fetch API wrapper
 *
 * @param {string} query - The query to be executed
 * @returns {object} - The response object
 */
export async function fetchApi(query) {
  const response = await fetch(query);
  const {success, data} = await response.json();

  if (success) {
    return data;
  }
}
