import { bibleAPI } from '../api/https'
import { normalizeBibleVerse } from '../utils/normalizeBibleVerse'

//apenas random
export async function fetchRandomBibleVerse() {
  const response = await bibleAPI.get('/data/web/random')
  console.log(response.data.random_verse)
  const verse = normalizeBibleVerse(response.data.random_verse)
  console.log(verse)
  return verse
}
