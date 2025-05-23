export const defaultTagideItem = {
  id: '', // string: id único
  title: '', // string: título da obra ou item
  author: '', // string: nome do autor/artista
  creationDate: '', // string|date: data da obra (ex: "1819-1823")
  text: '', // string: texto descritivo ou conteúdo textual
  imageUrl: '', // string: URL da imagem (se houver)
  audioUrl: '', // string: URL do áudio (se houver)
  type: '', // string: 'text' | 'image' | 'sound' | 'other'
  source: '', // string: nome da API/fonte
  tags: [], // array[string]: tags para categorização
  metadata: {
    // objeto: campos adicionais específicos da API/fonte
    originalId: '',
    sourceUrl: '',
    rights: '',
    rawData: {}, // dados brutos originais, se quiser guardar
  },
}
