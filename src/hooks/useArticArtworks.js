import { useQuery } from '@tanstack/react-query'
import { fetchArticArtworks } from '../services/artic'

export const useArticArtworks = () =>
  useQuery({
    queryKey: ['articArtworks'],
    queryFn: fetchArticArtworks,
  })
