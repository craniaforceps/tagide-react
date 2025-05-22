import { useArticArtworks } from '../hooks/useArticArtworks'

const ArticGallery = () => {
  const { data, isLoading, error } = useArticArtworks()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {data.map((artwork) => {
          const { author, imageUrl, title } = artwork

          return (
            <div key={artwork.id} className="grid gap-4 align-top">
              <div>
                {/* <h2 className="text-lg font-semibold p-4">{title}</h2>
                <h2 className="text-lg font-semibold p-4">{author}</h2> */}
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={imageUrl}
                  alt="ayo. sorry, can't display this image"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ArticGallery
