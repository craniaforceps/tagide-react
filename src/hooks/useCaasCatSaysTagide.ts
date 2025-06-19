import { useQuery } from '@tanstack/react-query'
import { fetchCaasCatSaysTagide } from '../services/caas'

export const useCaasCatSaysTagide = () =>
  useQuery({
    queryKey: ['randomCat'],
    queryFn: fetchCaasCatSaysTagide,
  })
