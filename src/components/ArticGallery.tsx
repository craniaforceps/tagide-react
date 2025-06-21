// components/ArticGallery.jsx
import { useArticArtworks } from '../hooks/useArticArtworks'
import { useState } from 'react'
import { TagideItemType } from '../types/api/tágideItem'

const ArticGallery = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, isLoading, error } = useArticArtworks(searchQuery)

  return (
    <div className="grid">
      <input
        type="text"
        placeholder="Pesquisar obras"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 mb-4 rounded"
      />

      {isLoading && <p>A carregar...</p>}
      {error && <p>Erro: {error.message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.map(({ id, author, imageUrl, title }) => (
          <div key={id} className="rounded-lg shadow p-2 space-y-1">
            <img
              className="h-auto max-w-full rounded-lg"
              src={imageUrl}
              alt={title || 'Imagem da obra'}
            />
            <p className="text-sm m-0">{title}</p>
            <p className="text-sm m-0">{author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticGallery
