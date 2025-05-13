import { xenoCantoAPI } from '../api/https'

// services/xenocanto.js
export async function fetchXenocantoByLocation() {
  const MAX_RESULTS = 5

  try {
    // Primeira tentativa: usando perPage
    let response = await xenoCantoAPI.get('/recordings', {
      params: {
        query: 'cnt:Brazil',
        page: 1,
        perPage: MAX_RESULTS,
        _: Date.now(), // Evita cache
      },
    })

    // Se a API ignorou o perPage, aplicamos o limite manual
    const recordings = response.data.recordings || []
    if (recordings.length > MAX_RESULTS) {
      console.warn(
        `API retornou ${recordings.length} resultados, limitando para ${MAX_RESULTS}`
      )
      return recordings.slice(0, MAX_RESULTS)
    }

    return recordings
  } catch (error) {
    console.error('Falha na requisição:', {
      url: error.config?.url,
      params: error.config?.params,
      status: error.response?.status,
    })
    throw new Error(
      `Erro ao carregar gravações: ${
        error.response?.data?.message || error.message
      }`
    )
  }
}
