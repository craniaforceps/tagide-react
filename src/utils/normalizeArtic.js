export function normalizeArtic(item) {
  return {
    id: item.id,
    title: item.title,
    author: item.artist_title || 'Autor desconhecido',
    text: item.description || '',
    imageUrl: item.image_id
      ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`
      : null, // ou URL de placeholder
    type: 'media',
    source: 'artic',
    tags: [],
    metadata: { rawData: item },
  }
}
