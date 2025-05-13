import { useBibleVerse } from '../hooks/useBibleVerse'

const BibleRandom = () => {
  const { data, isLoading, error } = useBibleVerse()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <div className="  max-w-2xl mx-auto mt-6">
      <p className="text-xl italic leading-relaxed text-center">
        "{data.text}"
      </p>
      <p className="text-lg mt-4 text-center">
        <span className="font-semibold">{data.book}</span>{' '}
        <span className="">
          {data.chapter}:{data.verse}
        </span>
      </p>
    </div>
  )
}
export default BibleRandom
