import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import BibleRandom from './components/BibleRandom'
import ArticGallery from './components/ArticGallery'
import RandomCat from './components/RandomCat'
import Title from './components/Title'
import PoemDisplay from './components/PoemDisplay'
import GitaLibrary from './components/GitaLibrary'
import Weather from './components/Weather'
import FbiGallery from './components/FbiGallery'
import XenocantoDisplay from './components/XenocantoDisplay'
import EuropeanaGallery from './components/EuropeanaGallery'

function App() {
  const [artwork, setArtwork] = useState([])
  const [gita, setGita] = useState([])
  const [europeana, setEuropeana] = useState([])
  const [cat, setCat] = useState([])
  const [duck, setDuck] = useState([])
  const [bible, setBible] = useState([])
  const [poem, setPoem] = useState([])
  const [fbi, setFbi] = useState([])
  const [meteo, setMeteo] = useState([])
  // const [canto, setCanto] = useState([])

  const fetchArtwork = async () => {
    const url = 'https://api.artic.edu/api/v1/artworks'
    try {
      const resp = await fetch(url)
      const data = await resp.json()

      const artworksData = data.data

      setArtwork(artworksData)
      // console.log('artwork data:', artworksData)
    } catch (error) {
      console.log('error', error)
    }
  }

  const fetchEuropeana = async () => {
    const url = `https://api.europeana.eu/record/v2/search.json?wskey=${
      import.meta.env.VITE_API_KEY_EUROPEANA
    }&query=*&qf=what:"http://vocab.getty.edu/aat/300033618"`

    //api.europeana.eu/record/v2/search.json?wskey=YOUR_API_KEY&query=beethoven&qf=TYPE:SOUND

    try {
      const resp = await fetch(url)
      const data = await resp.json()

      const europeanaData = data.items

      setEuropeana(europeanaData)
    } catch (error) {
      console.log('error', error)
    }
  }

  //ormiumsbyhon
  //api.europeana.eu/record/v2/search.json?query=*&colourpalette=%230000FF&wskey=ormiumsbyhon

  const fetchCats = async () => {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?api_key='

    //api.europeana.eu/record/v2/search.json?wskey=YOUR_API_KEY&query=beethoven&qf=TYPE:SOUND

    try {
      const resp = await fetch(`${apiUrl}${import.meta.env.VITE_API_KEY_CAT}`)
      const data = await resp.json()

      const catData = data[0]
      setCat(catData)
    } catch (error) {
      console.log('error', error)
    }
  }

  // const fetchDucks = async () => {
  //   const duckUrl = 'https://random-d.uk/api'

  //   try {
  //     const resp = await fetch(`${duckUrl}/random`)
  //     const data = await resp.json()
  //     console.log(data)

  //     setDuck(duckData)
  //     console.log('duck', duck)
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }

  // const fetchBible = async () => {
  //   const baseUrl = 'https://bible-api.com'
  //   const random = '/data/web/random'

  //   try {
  //     const resp = await fetch(`${baseUrl}${random}`)
  //     const data = await resp.json()
  //     const bibleData = data.random_verse

  //     // console.log(bibleData)
  //     setBible(bibleData)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const fetchPoem = async (maxLines = 50, retryCount = 0) => {
  //   const baseUrl = 'https://poetrydb.org'
  //   const random = '/random'

  //   try {
  //     const resp = await fetch(`${baseUrl}${random}`)
  //     const data = await resp.json()
  //     // console.log('fetch poem data', data)
  //     const { lines, title, author, linecount } = data[0]
  //     if (parseInt(linecount) > maxLines) {
  //       if (retryCount < 10) {
  //         console.log(
  //           `Poema muito longo (${linecount} linhas). Tentando novamente...`
  //         )
  //         return fetchPoem(maxLines, retryCount + 1)
  //       } else {
  //         console.warn('Número máximo de tentativas atingido.')
  //       }
  //     }
  //     // console.log('lines', lines)

  //     // console.log('linecount', linecount)
  //     setPoem({ lines, title, author, linecount })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const fetchFbi = async () => {
    const baseUrl = 'https://api.fbi.gov/wanted/v1/list'

    try {
      const response = await fetch(baseUrl)
      const data = await response.json()

      const fbiData = data.items
      // console.log(fbiData)
      setFbi(fbiData)
    } catch (error) {
      console.log(error)
    }
  }

  // const fetchMeteo = async () => {
  //   const baseUrl = 'http://api.weatherapi.com/v1'

  //   try {
  //     const response = await fetch(
  //       `${baseUrl}/current.json?key=${
  //         import.meta.env.VITE_API_KEY_METEO
  //       }&q=Santa Cruz, Torres Vedras`
  //     )
  //     const data = await response.json()

  //     const meteoData = data.current

  //     // console.log(meteoData)
  //     setMeteo(meteoData)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const fetchCanto = async () => {
  //   const country = 'Portugal'
  //   const baseUrl = 'https://xeno-canto.org/api/3/recordings'

  //   try {
  //     const resp = await fetch(
  //       `${baseUrl}?query=cnt:${country}&key=${
  //         import.meta.env.VITE_API_KEY_CANTO
  //       }&limit=5`
  //     )
  //     const data = await resp.json()
  //     const cantoData = data.recordings
  //     setCanto(cantoData) // Salva os dados obtidos no estado
  //     console.log('xenocanto', cantoData)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const { condition, wind_kph, temp_c, humidity, precip_mm } = meteo
  useEffect(() => {
    fetchArtwork()
    // fetchGita()
    fetchEuropeana()
    // fetchCats()
    // fetchDucks()
    // fetchBible()
    // fetchPoem()
    fetchFbi()
    // fetchMeteo()
    // fetchCanto()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <Navbar />
      <div className="mt-5 grid grid-cols-1">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_]">
          <RandomCat />
          <div className="grid">
            <Title />
            <BibleRandom />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1">
            <PoemDisplay />
            <Weather />
          </div>
        </div>
        <ArticGallery />
        <GitaLibrary />

        <EuropeanaGallery />
        <FbiGallery />
      </div>

      <XenocantoDisplay />
    </section>
  )
}

export default App
