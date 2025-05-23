import { useBibleVerse } from '../hooks/useBibleVerse'

const BibleRandom = () => {
  const { data, isLoading, error } = useBibleVerse()

  console.log('bibleRandom data', data)

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <div className="mx-auto">
      <p className="italic text-center m-0 p-0 leading-tight">{data.text}</p>
      <p className="text-center font-bold m-0 p-0 leading-tight capitalize">
        {data.title}
      </p>
    </div>
  )
}
export default BibleRandom
