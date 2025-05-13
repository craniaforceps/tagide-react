import { useEffect } from 'react'
import { useXenocantoByLocation } from '../hooks/useXenocantoByLocation'

// components/XenocantoDisplay.jsx
const XenocantoDisplay = () => {
  const { data, isLoading, error } = useXenocantoByLocation()

  if (isLoading)
    return (
      <div className="text-center py-8">
        <p className="mt-2">Carregando gravações...</p>
      </div>
    )

  if (error)
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <h3 className="text-red-600 font-bold">Erro</h3>
        <p className="text-red-800">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-100 rounded-md"
        >
          Tentar novamente
        </button>
      </div>
    )

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">
        Gravações de Aves no Brasil
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((recording) => (
          <div key={recording.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">
              {recording.en || 'Espécie não identificada'}
            </h3>
            <p className="text-sm text-gray-600">
              {recording.loc || 'Local desconhecido'}
            </p>

            <audio
              controls
              className="w-full mt-3"
              src={`https:${recording.file}`}
            >
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        ))}
      </div>
    </div>
  )
}

export default XenocantoDisplay
