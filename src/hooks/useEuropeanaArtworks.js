import { useQuery } from '@tanstack/react-query'
import { fetchEuropeanaArtworks } from '../services/europeana'

export const useEuropeanaArtworks = (query, rows, type) => {
  return useQuery({
    queryKey: ['europeanaArtworks', query, rows, type],
    queryFn: () => fetchEuropeanaArtworks(query, rows, type),
    staleTime: 60 * 60 * 1000, // 1 hour cache
    retry: 2,
    select: (data) => {
      // Filtra apenas itens com thumbnail válido
      return data.filter((item) => item.thumbnail)
    },
  })
}
