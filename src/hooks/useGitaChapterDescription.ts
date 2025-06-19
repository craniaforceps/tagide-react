import { useQuery } from '@tanstack/react-query'
import { fetchGitaChapterDescription } from '../services/gita'

export const useGitaChapterDescription = () =>
  useQuery({
    queryKey: ['gitaChapterDescription'],
    queryFn: fetchGitaChapterDescription,
  })
