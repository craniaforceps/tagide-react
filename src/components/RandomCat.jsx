import { useRandomCat } from '../hooks/useRandomCat'

const RandomCat = () => {
  const { data, isLoading, error } = useRandomCat()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <div className="m-5 flex justify-center">
      <div className="w-full max-w-sm aspect-square overflow-hidden rounded-xl shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={data.url}
          alt="Random Cat"
        />
      </div>
    </div>
  )
}
export default RandomCat
