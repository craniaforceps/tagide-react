import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { fetchArticArtworks } from '../services/artic'
import type { TagideItemType } from '../types/api/tágideItem'

export const useArticArtworks = (
  searchTerm = '',
  page = 1,
  limit = 9
): UseQueryResult<TagideItemType[], Error> => {
  return useQuery<TagideItemType[], Error>({
    queryKey: ['articArtworks', searchTerm, page, limit],
    queryFn: () => fetchArticArtworks(searchTerm, page, limit),
    staleTime: 60 * 60 * 1000,
  })
}
