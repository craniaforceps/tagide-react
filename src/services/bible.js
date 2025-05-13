import { bibleAPI } from '../api/https'

//apenas random
export async function fetchRandomBibleVerse() {
  const response = await bibleAPI.get('/data/web/random')
  return response.data.random_verse
}
