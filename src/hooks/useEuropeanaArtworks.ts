import { useQuery } from '@tanstack/react-query'
import { fetchEuropeanaArtworks } from '../services/europeana'

export const useEuropeanaArtworks = (searchTerm, rows = 9, type) => {
  return useQuery({
    queryKey: ['europeanaArtworks', searchTerm, rows, type],
    queryFn: () => fetchEuropeanaArtworks(searchTerm, rows, type),
    staleTime: 60 * 60 * 1000, // 1 hour cache
    retry: 2,
    select: (data) => {
      // Corrigir o nome da propriedade
      return data.filter((item) => item.imageUrl)
    },
  })
}
