export type RawArticItem = {
  id: number
  title?: string
  image_id?: string
  description?: string
  artist_title?: string
}

export type ArticAPIResponse = {
  data: RawArticItem[]
}
