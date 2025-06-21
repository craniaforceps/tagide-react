import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci'
import {
  ArticGallery,
  BibleRandom,
  EuropeanaGallery,
  RandomCat,
  Title,
} from '../components'
import ArticSolo from '../components/ArticSolo'
import { useState, useRef, useEffect } from 'react'

const Arquivo = () => {
  const [articIsActive, setArticIsActive] = useState(true)
  const [europeanaIsActive, setEuropeanaIsActive] = useState(true)

  const articTitleRef = useRef(null)
  const europeanaTitleRef = useRef(null)

  const prevArticIsActive = useRef(articIsActive)
  const prevEuropeanaIsActive = useRef(europeanaIsActive)

  // Scroll só quando articIsActive muda de false para true
  useEffect(() => {
    if (articIsActive && !prevArticIsActive.current && articTitleRef.current) {
      articTitleRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    prevArticIsActive.current = articIsActive
  }, [articIsActive])

  // Scroll só quando europeanaIsActive muda de false para true
  useEffect(() => {
    if (
      europeanaIsActive &&
      !prevEuropeanaIsActive.current &&
      europeanaTitleRef.current
    ) {
      europeanaTitleRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    prevEuropeanaIsActive.current = europeanaIsActive
  }, [europeanaIsActive])
  const toggleArtic = () => {
    setArticIsActive((prev) => !prev)
  }

  const toggleEuropeana = () => {
    setEuropeanaIsActive((prev) => !prev)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 w-full min-h-screen">
      <div className="grid place-items-center p-5 ">
        <article className="prose lg:prose-xl grid place-items-center p-5">
          <Title text="A tágide e o arquivo" color="red" />
          <hr className="border-t-10  md:border-t-12 lg:border-t-15 border-red-500 mb-3 mt-0 pt-0 lg:mb-3 lg:pb-0 lg:pt-0 lg:mt-6  w-full " />

          <p className="text-base md:text-l px-1 text-justify mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, delectus, repellendus in minus exercitationem
            accusantium quis debitis quas facilis natus vero amet ratione
            reprehenderit, esse distinctio dolores magni veritatis obcaecati?
          </p>

          <ArticSolo />

          {/* <p className="text-l px-1 text-justify mb-0 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            optio voluptatem quisquam rerum ipsam sequi odit non reiciendis
            harum aspernatur totam ut, quia molestiae dolorem quas dolor
            expedita eius nisi?
          </p> */}

          <div className="not-prose mt-4 w-full">
            {/* Título + botão Artic */}
            <div className="w-full flex justify-center">
              <div className="flex items-baseline gap-1">
                <h4
                  ref={articTitleRef}
                  className="text-2xl tracking-wide leading-none m-0 p-0"
                >
                  Art Institute of Chicago
                </h4>
                <button
                  type="button"
                  onClick={toggleArtic}
                  aria-expanded={articIsActive}
                  aria-controls="artic-gallery"
                  className="p-0 m-0 flex items-center justify-center"
                >
                  {articIsActive ? (
                    <CiSquareMinus size={24} className="align-baseline" />
                  ) : (
                    <CiSquarePlus size={24} className="align-baseline" />
                  )}
                </button>
              </div>
            </div>

            {/* Secção de galeria Artic */}
            {articIsActive && (
              <div id="artic-gallery" className="not-prose mt-4 w-full">
                <ArticGallery />
              </div>
            )}

            {/* Título + botão Europeana */}
            <div className="w-full flex justify-center m-4">
              <div className="flex items-baseline gap-2">
                <h4
                  ref={europeanaTitleRef}
                  className="text-2xl tracking-wide leading-none m-0 p-0"
                >
                  Europeana
                </h4>
                <button
                  onClick={toggleEuropeana}
                  aria-expanded={europeanaIsActive}
                  aria-controls="europeana-gallery"
                  className="p-0 m-0 flex items-center justify-center"
                >
                  {europeanaIsActive ? (
                    <CiSquareMinus size={24} className="align-baseline" />
                  ) : (
                    <CiSquarePlus size={24} className="align-baseline" />
                  )}
                </button>
              </div>
            </div>

            {/* Secção de galeria Europeana */}
            {europeanaIsActive && (
              <div id="europeana-gallery" className="">
                <EuropeanaGallery />
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}
export default Arquivo
