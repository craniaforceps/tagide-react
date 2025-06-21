import { useEffect, useState } from 'react'
import { stripHtml } from '../utils/utils'
import Editor from '../components/TextEditor'
import { useArticArtworks } from '../hooks/useArticArtworks'
import { useEuropeanaArtworks } from '../hooks/useEuropeanaArtworks'
import { Title } from '../components'

const Testes = () => {
  const [showDescription, setShowDescription] = useState(false)
  const [index, setIndex] = useState(0)
  const [allData, setAllData] = useState([])

  const { data: articData = [], isLoading: articIsLoading } = useArticArtworks(
    'picasso',
    1,
    10
  )

  const { data: europeanaData = [], isLoading: europeanaIsLoading } =
    useEuropeanaArtworks('futurism', 0)

  // Cria allData assim que ambos os datasets estiverem prontos
  useEffect(() => {
    if (articData.length > 0 || europeanaData.length > 0) {
      const combined = [...articData, ...europeanaData]
      const shuffled = combined.sort(() => Math.random() - 0.5)
      setAllData(shuffled)
    }
  }, [articData, europeanaData])

  if (articIsLoading || europeanaIsLoading) {
    return <p>Loading...</p>
  }

  if (allData.length === 0) {
    return <p>Sem dados para mostrar.</p>
  }

  const { author, title, imageUrl, text } = allData[index]
  const newText = stripHtml(text).trim()

  const toggleDescription = () => setShowDescription((prev) => !prev)

  const nextButton = () => {
    setShowDescription(false)
    setIndex((prev) => (prev + 1) % allData.length)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="flex justify-center items-center p-5 w-full min-h-screen">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <Title text="Inspira-te connosco!" color="amber" />

          <hr className="border-t-10 md:border-t-12 lg:border-t-15 border-amber-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0 lg:pt-0 lg:mt-6  w-full" />

          {/* <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="grid place-items-center p-5 ">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <h1 className="text-5xl tracking-wide text-red-500 text-right align-right md:text-6xl lg:text-7xl mb-2 pb-2 lg:mb-0 lg:pb-0 ">
            A tágide e o arquivo
          </h1>
          <hr className="border-t-10 md:border-t-12 lg:border-t-15 border-red-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0 lg:pt-0 lg:mt-6  w-full " /> */}

          <div className="not-prose grid grid-cols-1 gap-0 place-items-center">
            <p className="font-bold">{title}</p>
            <p>{author}</p>
            <img
              src={imageUrl}
              alt={title}
              className="max-w-[90%] max-h-[70vh] "
            />

            <button className="btn mt-2" onClick={nextButton}>
              Seguinte
            </button>

            {newText && (
              <>
                <button
                  className="btn mt-4"
                  onClick={toggleDescription}
                  aria-expanded={showDescription}
                  aria-controls="description-text"
                >
                  {showDescription
                    ? 'Esconder informação'
                    : 'Mostrar informação'}
                </button>

                {showDescription && (
                  <>
                    <p
                      id="description-text"
                      className="prose mt-2 text-justify"
                    >
                      {newText}
                    </p>
                  </>
                )}
              </>
            )}

            <div className="editor">
              <Editor />
            </div>
          </div>

          <p className="text-l px-1 text-justify mb-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            atque obcaecati dolore mollitia molestiae nostrum recusandae minima
            est hic sed vel quod eum ex assumenda, voluptatum eius tempore!
            Voluptatum, eveniet!
          </p>
        </article>
      </div>
    </section>
  )
}

export default Testes
