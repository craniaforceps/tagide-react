import { normalizeArtic } from '../../utils/normalizeArtic'

export type ArticType = {
  id: number
  title: string
  image_id: string | null
  description: string | null
  artist_title: string | null
}

export type NormalizedArtic = ReturnType<typeof normalizeArtic>
