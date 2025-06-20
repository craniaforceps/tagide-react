import { TagideItemType } from './../types/api/tágideItem'
import { articAPI } from '../api/https'
import { normalizeArtic } from '../utils/normalizeArtic'
import type { AxiosResponse } from 'axios'

type ArticAPIResponse = {
  data: any[] // dados crus da API (não são TagideItemType ainda)
}

// Fetcher
export async function fetchArticArtworks(
  searchTerm = '',
  page = 1,
  limit = 12
): Promise<TagideItemType[]> {
  const response: AxiosResponse<ArticAPIResponse> = await articAPI.get(
    '/artworks/search',
    {
      params: {
        q: searchTerm,
        fields: 'id,title,image_id,description,artist_title',
        page,
        limit,
      },
    }
  )

  return response.data.data.map(normalizeArtic)
}
