// hooks/useArticArtworks.js
import { useQuery } from '@tanstack/react-query'
import { fetchArticArtworks } from '../services/artic'

export const useArticArtworks = (searchTerm = '', page = 1, limit = 9) => {
  return useQuery({
    queryKey: ['articArtworks', searchTerm, page, limit],
    queryFn: () => fetchArticArtworks(searchTerm, page, limit),
    staleTime: 60 * 60 * 1000, // 1 hora de cache
    keepPreviousData: true, // mantém dados antigos ao trocar página
  })
}
