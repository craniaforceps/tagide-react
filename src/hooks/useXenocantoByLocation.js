import { useQuery } from '@tanstack/react-query'
import { fetchXenocantoByLocation } from '../services/xenocanto'

export const useXenocantoByLocation = () =>
  useQuery({
    queryKey: ['xenocantoByLocation'],
    queryFn: fetchXenocantoByLocation,
  })
