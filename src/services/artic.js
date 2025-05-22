import { articAPI } from '../api/https'
import { normalizeArtic } from '../utils/normalizeArtic'

export async function fetchArticArtworks() {
  const response = await articAPI.get('/artworks/') //mcuradoria
  const artworks = response.data.data

  const normalizedArtic = artworks.map(normalizeArtic) // <- Aqui está o essencial

  return normalizedArtic
}
