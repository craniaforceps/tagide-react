import { gitaAPI } from '../api/https'
import { normalizeGita } from '../utils/normalizeGita'

// o método /chapter devolve a descrição, podemos consultar também o chapter individual na íntegra de acordo com vários autores, tal como várias
export async function fetchGitaChapterDescription() {
  const response = await gitaAPI.get('/chapters')
  console.log('Gita!!!!!', response.data)
  console.log('normalized gita', response.data.map(normalizeGita))
  return response.data.map(normalizeGita)
}
