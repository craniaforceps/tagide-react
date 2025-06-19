import { bibleAPI } from '../api/https'
import { normalizeBibleVerse } from '../utils/normalizeBibleVerse'

//apenas random
export async function fetchRandomBibleVerse() {
  const response = await bibleAPI.get('/data/web/random')

  const verse = normalizeBibleVerse(response.data.random_verse)

  return verse
}
