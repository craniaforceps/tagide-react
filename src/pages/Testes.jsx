import { useState } from 'react'
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
import { useArticArtworks } from '../hooks/useArticArtworks'
import { useEuropeanaArtworks } from '../hooks/useEuropeanaArtworks'
import Editor from '../components/TextEditor'

// import { useCaasCatSaysTagide } from '../hooks/useCaasCatSaysTagide'

const Testes = () => {
  // const { data, isLoading, error } = useCaasCatSaysTagide()

  // const [searchTerm, setSearchTerm] = useState('nature')

  const [index, setIndex] = useState(0)

  const {
    data: articData,
    isLoading: articIsLoading,
    // error: articError,
  } = useArticArtworks('francis bacon painter', 1, 10)

  const {
    data: europeanaData,
    isLoading: europeanaIsLoading,
    // error: europeanaError,
  } = useEuropeanaArtworks('francis bacon painter', 10, 'IMAGE')

  if (articIsLoading || europeanaIsLoading) return <p>Loading...</p>

  const allData = [...articData, ...europeanaData].sort(
    () => Math.random() - 0.5
  )

  const { author, title, imageUrl } = allData[index]

  console.log(allData)

  const nextButton = () => {
    if (index === allData.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  // if (isLoading) return <p>A carregar...</p>
  // if (error) return <p>Erro: {error.message}</p>
  return (
    <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="flex justify-center items-center p-5 w-full min-h-screen">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <h1 className="text-5xl tracking-wide text-amber-500 text-right align-right md:text-6xl lg:text-7xl mb-2 pb-2 lg:mb-0 lg:pb-0 ">
            Inspira-te connosco
          </h1>
          <hr className="border-t-10 md:border-t-12 lg:border-t-15 border-amber-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0 lg:pt-0 lg:mt-6  w-full " />

          <div className="not-prose grid grid-cols-1 gap-0 place-items-center">
            <p>{title}</p>
            <p>{author}</p>
            <img src={imageUrl} alt="" className="max-w-[90%] max-h-[70vh]" />
            <button className="btn" onClick={nextButton}>
              Seguinte
            </button>
            <Editor />
          </div>
          <p className="text-l px-1 text-justify mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, delectus, repellendus in minus exercitationem
            accusantium quis debitis quas facilis natus vero amet ratione
            reprehenderit, esse distinctio dolores magni veritatis obcaecati?
          </p>
        </article>
      </div>
    </section>
  )
}
export default Testes
