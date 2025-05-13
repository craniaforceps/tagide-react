import { useRandomPoem } from '../hooks/useRandomPoem'
import { getRandomPoem } from '../services/poem'

const PoemDisplay = () => {
  const { data, isLoading, error } = useRandomPoem()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <div className="grid md:grid-cols-2 h-max-full">
      <div>
        <h1 className="text-xl ml-6 mt-6">{data.title}</h1>
        <h1 className="text-2xl ml-6 my-2"> by {data.author}</h1>

        {data.lines?.map((line, index) => (
          <p key={index} className="ml-6 my-2">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
export default PoemDisplay
