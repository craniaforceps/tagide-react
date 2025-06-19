import { useGitaChapterDescription } from '../hooks/useGitaChapterDescription'

const GitaLibrary = () => {
  const { data, isLoading, error } = useGitaChapterDescription()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <div>
      <h2 className="text-xl font-bold ml-6 mt-6 text-center">
        Bhagavad Gita Chapters
      </h2>
      <div className="m-5 space-y-4">
        {data.map((item) => {
          const { text, title, chapter_number } = item
          const key = `${chapter_number}-${title}` // Combinação segura

          return (
            <div
              key={key}
              className="leading-loose tracking-wider text-justify grid grid-cols-[0.5fr_1fr_5fr] p-4 rounded-lg"
            >
              <p className="font-semibold">{chapter_number}</p>
              <p className="italic">{title}</p>
              <p>{text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GitaLibrary
