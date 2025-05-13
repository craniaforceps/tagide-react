import { articAPI } from '../api/https'

export async function fetchArticArtworks() {
  const response = await articAPI.get('/artworks')
  return response.data.data
}
