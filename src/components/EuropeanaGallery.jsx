import { useEuropeanaArtworks } from '../hooks/useEuropeanaArtworks'

const ArtworkGallery = ({ searchQuery = 'painting' }) => {
  const { data, isLoading, error } = useEuropeanaArtworks(
    searchQuery,
    12,
    'IMAGE'
  )

  if (isLoading) return <div>Loading artworks...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data?.map((artwork) => (
        <div key={artwork.id} className="artwork-card">
          <img src={artwork.thumbnail} alt={artwork.title} />
          <h3>{artwork.title}</h3>
          <p>
            {artwork.creator} ({artwork.date})
          </p>
        </div>
      ))}
    </div>
  )
}

export default ArtworkGallery
