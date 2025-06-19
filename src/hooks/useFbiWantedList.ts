import { useQuery } from '@tanstack/react-query'
import { fetchFbiWantedList } from '../services/fbi'

export const useFbiWantedList = () =>
  useQuery({
    queryKey: ['fbiWantedList'],
    queryFn: fetchFbiWantedList,
  })
