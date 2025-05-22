export function normalizeEuropeana(item) {
  return {
    id: item.id,
    title: item.title?.[0] || 'Untitled',
    text: item.text?.[0] || '',
    author: item.dcCreator?.[0] || 'Unknown artist',
    imageUrl: item.edmPreview?.[0] || '',
    date: item.year?.[0] || 'Unknown date',
    type: 'media',
    source: 'europeana',
    tags: ['europeana', item.title?.[0], item.dcCreator?.[0]],
    metadata: item,
  }
}
