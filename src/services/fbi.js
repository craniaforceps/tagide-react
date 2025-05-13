import { fbiAPI } from '../api/https'

export async function fetchFbiWantedList() {
  const response = await fbiAPI.get('/list')

  return response.data
}
