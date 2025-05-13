import { useArticArtworks } from '../hooks/useArticArtworks'

const ArticGallery = () => {
  const { data, isLoading, error } = useArticArtworks()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>

  // console.log("artic",data)

  return (
    <div>
      <h2 className="text-xl font-bold ml-6 mt-6 text-center">Artworks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
        {data.map((artwork) => {
          const { artist_title, title } = artwork
          return (
            <div key={artwork.id} className="grid gap-4 align-top">
              <div>
                <h2 className="text-lg font-semibold p-4">{title}</h2>
                <h2 className="text-lg font-semibold p-4">{artist_title}</h2>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                  alt=""
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
