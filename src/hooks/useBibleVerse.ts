import { useQuery } from '@tanstack/react-query'
import { fetchRandomBibleVerse } from '../services/bible'

export const useBibleVerse = () =>
  useQuery({
    queryKey: ['bibleVerse'],
    queryFn: fetchRandomBibleVerse,
  })
