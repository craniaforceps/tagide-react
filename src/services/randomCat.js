import { catAPI } from '../api/https'

export async function fetchRandomCat() {
  const response = await catAPI.get('/images/search?')
  return response.data[0]
}
