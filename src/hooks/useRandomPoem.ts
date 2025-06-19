import { useQuery } from '@tanstack/react-query'
import { fetchPoemByLinecount } from '../services/poem'

export const useRandomPoem = () => {
  return useQuery({
    queryKey: ['randomPoem'],
    queryFn: fetchPoemByLinecount, //já vêm randomizados
  })
}
