import {
  ArticGallery,
  BibleRandom,
  EuropeanaGallery,
  FbiGallery,
  GitaLibrary,
  PoemDisplay,
  RandomCat,
  Title,
  Weather,
  XenocantoDisplay,
  Navbar,
} from '../components'

import { useCaasCatSaysTagide } from '../hooks/useCaasCatSaysTagide'

const Testes = () => {
  const { data, isLoading, error } = useCaasCatSaysTagide()

  if (isLoading) return <p>A carregar...</p>
  if (error) return <p>Erro: {error.message}</p>
  return (
    <section className="mx-auto px-4 py-8 w-full min-h-screen max-w-6xl">
      <div className="mt-5 grid grid-cols-1">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_]">
          <RandomCat />

          <Title />
          <BibleRandom />
          <img src={data.imageUrl} alt="" />

          <PoemDisplay />
          <Weather />

          <ArticGallery />
          <GitaLibrary />

          <EuropeanaGallery />
          <FbiGallery />

          <XenocantoDisplay />
        </div>
      </div>
    </section>
  )
}
export default Testes
