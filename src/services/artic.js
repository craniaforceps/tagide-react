// services/artic.js
import { articAPI } from '../api/https'
import { normalizeArtic } from '../utils/normalizeArtic'

export async function fetchArticArtworks(
  searchTerm = '',
  page = 1,
  limit = 12
) {
  const response = await articAPI.get('/artworks/search', {
    params: {
      q: searchTerm,
      fields: 'id,title,image_id,description,artist_title',
      page,
      limit,
    },
  })

  const artworks = response.data.data
  return artworks.map(normalizeArtic)
}

//https://api.artic.edu/docs/
