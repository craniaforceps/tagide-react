export function normalizeGita(item) {
  return {
    id: item.chapter_number,
    title: `${item.translation || 'Sem título'}: ${item.meaning?.en || ''}`,
    author: '',
    text: item.summary?.en || '',
    imageUrl: '',
    type: 'text',
    source: 'gita',
    tags: ['gita', item.translation].filter(Boolean),
    metadata: { rawData: item },
  }
}
