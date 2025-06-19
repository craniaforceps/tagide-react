import { europeanaAPI } from '../api/https'
import { normalizeEuropeana } from '../utils/normalizeEuropeana'

export const fetchEuropeanaArtworks = async (
  query = '*',
  rows = 12,
  type = 'IMAGE'
) => {
  try {
    const response = await europeanaAPI.get('/search.json', {
      params: {
        query,
        qf: `TYPE:${type}`,
        rows,
      },
    })

    if (!response.data?.items) {
      throw new Error('Invalid response structure from Europeana API')
    }

    return response.data.items.map(normalizeEuropeana)
  } catch (error) {
    console.error('Europeana API error:', {
      message: error.message,
      config: error.config,
      response: error.response?.data,
    })
    throw new Error('Failed to load artworks from Europeana')
  }
}
