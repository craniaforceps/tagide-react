// services/artic.js
import { articAPI } from '../api/https'
import { normalizeArtic } from '../utils/normalizeArtic'

export async function fetchArticArtworks(
  searchTerm = '',
  page = 1,
  limit = 12,
  rows = 9
) {
  const response = await articAPI.get('/artworks/search', {
    params: {
      q: searchTerm,
      fields:
        'id,title,artist_display,date_display,image_id,description,artist_title',
      page,
      limit,
      rows,
    },
  })

  console.log(response.data.data)

  const artworks = response.data.data
  return artworks.map(normalizeArtic)
}
