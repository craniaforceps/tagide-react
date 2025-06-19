import { meteoAPI } from '../api/https'

export async function fetchWeatherByLocation() {
  try {
    const location = 'Lisbon'
    const response = await meteoAPI.get('/current.json', {
      params: {
        q: location,
      },
    })
    return response.data.current
  } catch (error) {
    console.error('Full error:', error)
    throw new Error(error.response?.data?.error?.message || 'Weather API error')
  }
}
