import { useQuery } from '@tanstack/react-query'
import { fetchRandomCat } from '../services/randomCat'

export const useRandomCat = () =>
  useQuery({
    queryKey: ['randomCat'],
    queryFn: fetchRandomCat,
  })
