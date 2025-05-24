import { fbiAPI } from '../api/https'
import { normalizeFbi } from '../utils/normalizeFbi'

export async function fetchFbiWantedList() {
  const response = await fbiAPI.get('/list')

  const normalized = response.data.items.map(normalizeFbi)

  return normalized
}
