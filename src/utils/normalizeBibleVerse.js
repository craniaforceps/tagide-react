export function normalizeBibleVerse(item) {
  return {
    id: `${item.book_id}-${item.chapter}-${item.verse}`, // por ex: genesis-1-1
    title: `${item.book} ${item.chapter}:${item.verse}`, // por ex: "Génesis 1:1"
    text: item.text,
    author: item.book,
    imageUrl: '',
    date: '',
    type: 'text',
    source: 'bible',
    tags: ['bible', item.book_id],
    metadata: { rawData: item },
  }
}
