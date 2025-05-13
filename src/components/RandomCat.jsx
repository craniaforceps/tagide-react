import { useRandomCat } from '../hooks/useRandomCat'

const RandomCat = () => {
  const { data, isLoading, error } = useRandomCat()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  // console.log('cat api', data)

  return (
    <div>
      <div className="m-10 grid place-items-center w-100 h-100 relative ">
        <img
          className=" w-full h-full object-cover rounded-xl"
          src={data.url}
          alt=""
        />
      </div>
    </div>
  )
}
export default RandomCat
