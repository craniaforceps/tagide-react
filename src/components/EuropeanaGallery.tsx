import { useEuropeanaArtworks } from '../hooks/useEuropeanaArtworks'
import { useEffect, useState } from 'react'

const EuropeanaGallery = ({ defaultSearch = '' }) => {
  const [searchQuery, setSearchQuery] = useState(defaultSearch)
  const [mediaType, setMediaType] = useState('IMAGE')
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery.trim() === '' ? 'munakata' : searchQuery)
    }, 500) // Espera 500ms após o último input

    return () => clearTimeout(handler)
  }, [searchQuery])

  const { data, isLoading, error } = useEuropeanaArtworks(
    debouncedQuery,
    12,
    mediaType
  )

  return (
    <div className="w-full">
      {/* Filtros */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquisar Europeana..."
          className="border p-2 rounded w-full"
        />

        <select
          value={mediaType}
          onChange={(e) => setMediaType(e.target.value)}
          className="border p-2 rounded w-auto"
        >
          <option value="IMAGE">Imagem</option>
          <option value="TEXT">Texto</option>
          <option value="SOUND">Áudio</option>
          <option value="VIDEO">Vídeo</option>
          <option value="3D">3D</option>
        </select>
      </div>

      {/* Conteúdo */}
      {isLoading && <p>A carregar resultados...</p>}
      {error && <p>Erro: {error.message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data?.map((artwork) => (
          <div
            key={artwork.id}
            className="rounded-lg shadow p-2 space-y-1 bg-gray-100"
          >
            <img
              src={artwork.imageUrl}
              alt={artwork.title || 'Obra'}
              className="w-full h-auto rounded"
            />
            {/* Descomenta se quiseres exibir os metadados */}
            {/* <h3 className="text-sm font-semibold">{artwork.title}</h3>
            <p className="text-xs text-gray-600">
              {artwork.author || 'Autor desconhecido'} ({artwork.date})
            </p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default EuropeanaGallery
