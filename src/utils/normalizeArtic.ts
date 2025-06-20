import { RawArticItem } from './../types/api/artic'
import { TagideItemType } from '../types/api/tágideItem'

export function normalizeArtic(item: RawArticItem): TagideItemType {
  return {
    id: item.id?.toString() ?? '',
    title: item.title ?? '',
    author: item.artist_title ?? 'Autor desconhecido',
    creationDate: '',
    text: item.description ?? '',
    imageUrl: item.image_id
      ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
      : '',
    audioUrl: '',
    type: item.image_id ? 'image' : 'text',
    source: 'artic',
    tags: [],
    metadata: {
      originalId: item.id?.toString() ?? '',
      sourceUrl: `https://www.artic.edu/artworks/${item.id}`,
      rights: '',
      rawData: item,
    },
  }
}
