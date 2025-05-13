import { useGitaChapterDescription } from '../hooks/useGitaChapterDescription'

const GitaLibrary = () => {
  const { data, isLoading, error } = useGitaChapterDescription()

  const gita = data

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <div>
      <h2 className="text-xl font-bold ml-6 mt-6 text-center">
        Bhagavad Gita Chapters
      </h2>
      <ul className="list-disc m-5">
        {gita.map((gitaItem) => {
          const { chapter_number, name, meaning, summary } = gitaItem

          return (
            <div
              key={chapter_number}
              className="leading-loose tracking-wider text-justify grid grid-cols-[1fr_1fr_5fr] gap-4"
            >
              <p className="flex justify-self-auto">{name}</p>
              <p>{meaning.en}</p>
              <p>{summary.en}</p>
              <p></p>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
export default GitaLibrary
