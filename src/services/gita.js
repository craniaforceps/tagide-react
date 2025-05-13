import { gitaAPI } from '../api/https'

// o método /chapter devolve a descrição, podemos consultar também o chapter individual na íntegra de acordo com vários autores, tal como várias
export async function fetchGitaChapterDescription() {
  const response = await gitaAPI.get('/chapters')
  return response.data
}
