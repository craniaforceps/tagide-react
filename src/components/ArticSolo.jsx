import { useArticArtworks } from '../hooks/useArticArtworks'

const ArticSolo = () => {
  const { data, isLoading, error } = useArticArtworks()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  // Se não houver dados ainda
  if (!data || data.length === 0) return <p>Nenhuma obra encontrada.</p>

  // Escolher uma obra aleatória
  const randomArtwork = data[Math.floor(Math.random() * data.length)]
  const { author, title, imageUrl } = randomArtwork

  return (
    <div className="w-full max-w-sm aspect-auto overflow-hidden rounded-xl shadow-lg text-center lg:max-w-md">
      {/* <h2 className="text-2xl font-bold mb-4">Obra Aleatória</h2> */}
      {/* <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{author}</p> */}
      {imageUrl ? (
        <img src={imageUrl} alt={title} />
      ) : (
        <p>Imagem não disponível.</p>
      )}
    </div>
  )
}

export default ArticSolo
