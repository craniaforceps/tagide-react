export function normalizePoetry(item) {
  return {
    id: `${item.linecount}-${item.title}`,
    title: item.title,
    author: item.author || 'Autor desconhecido',
    text: item.lines,
    imageUrl: '',
    type: 'text',
    source: 'poetry',
    tags: ['poetry', `${item.title}`, `${item.author}`],
    metadata: { rawData: item },
  }
}
