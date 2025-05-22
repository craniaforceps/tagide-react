export function normalizeArtic(item) {
  return {
    id: item.id,
    title: item.title,
    author: item.artist_title,
    imageUrl: item.image_id
      ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
      : '',
    type: 'media',
    source: 'artic',
    tags: [],
    metadata: item, //a guardar tudo aqui, cuidado
  }
}
