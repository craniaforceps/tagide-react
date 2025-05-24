export function normalizeFbi(item) {
  return {
    id: item.uid || item.url,
    title: item.title || 'Sem título',
    text: item.description || '',
    author: item.aliases?.[0] || 'Desconhecido',
    imageUrl: item.images?.[0]?.original || '',
    date: item.publication || 'Data desconhecida',
    type: 'other',
    source: 'fbi',
    tags: ['fbi', item.title, item.hair, item.race_raw].filter(Boolean),
    metadata: item,
  }
}
