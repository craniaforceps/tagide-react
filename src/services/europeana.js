import { europeanaAPI } from '../api/https'

export const fetchEuropeanaArtworks = async (
  query = '*',
  rows = 12,
  type = 'IMAGE'
) => {
  try {
    const response = await europeanaAPI.get('/search.json', {
      params: {
        query: query,
        qf: `TYPE:${type}`,
        rows: rows,
      },
    })

    if (!response.data?.items) {
      throw new Error('Invalid response structure from Europeana API')
    }

    return response.data.items.map((item) => ({
      id: item.id,
      title: item.title?.[0] || 'Untitled',
      creator: item.dcCreator?.[0] || 'Unknown artist',
      thumbnail: item.edmPreview?.[0] || '',
      date: item.year || 'Unknown date',
      provider: item.dataProvider?.[0] || 'Unknown provider',
      link: item.guid || `https://www.europeana.eu/item${item.id}`,
    }))
  } catch (error) {
    console.error('Europeana API error:', {
      message: error.message,
      config: error.config,
      response: error.response?.data,
    })
    throw new Error('Failed to load artworks from Europeana')
  }
}
