import { useEffect, useState } from 'react'
import Navbar from './Navbar'

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
  const [canto, setCanto] = useState([])

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

  const fetchGita = async () => {
    const url = 'https://vedicscriptures.github.io/chapters/'

    try {
      const resp = await fetch(url)
      const data = await resp.json()

      const gitaData = data

      setGita(gitaData)
      // console.log('gita data', gitaData)
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
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?api_key=='

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

  const fetchBible = async () => {
    const baseUrl = 'https://bible-api.com'
    const random = '/data/web/random'

    try {
      const resp = await fetch(`${baseUrl}${random}`)
      const data = await resp.json()
      const bibleData = data.random_verse

      // console.log(bibleData)
      setBible(bibleData)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchPoem = async (maxLines = 50, retryCount = 0) => {
    const baseUrl = 'https://poetrydb.org'
    const random = '/random'

    try {
      const resp = await fetch(`${baseUrl}${random}`)
      const data = await resp.json()
      // console.log('fetch poem data', data)
      const { lines, title, author, linecount } = data[0]
      if (parseInt(linecount) > maxLines) {
        if (retryCount < 10) {
          console.log(
            `Poema muito longo (${linecount} linhas). Tentando novamente...`
          )
          return fetchPoem(maxLines, retryCount + 1)
        } else {
          console.warn('Número máximo de tentativas atingido.')
        }
      }
      // console.log('lines', lines)

      // console.log('linecount', linecount)
      setPoem({ lines, title, author, linecount })
    } catch (error) {
      console.log(error)
    }
  }

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

  const fetchMeteo = async () => {
    const baseUrl = 'http://api.weatherapi.com/v1'

    try {
      const response = await fetch(
        `${baseUrl}/current.json?key=${
          import.meta.env.VITE_API_KEY_METEO
        }&q=Santa Cruz, Torres Vedras`
      )
      const data = await response.json()

      const meteoData = data.current

      console.log(meteoData)
      setMeteo(meteoData)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCanto = async () => {
    const country = 'Portugal'
    const baseUrl = 'https://xeno-canto.org/api/3/recordings'

    try {
      const resp = await fetch(
        `${baseUrl}?query=cnt:${country}&key=${
          import.meta.env.VITE_API_KEY_CANTO
        }&limit=5`
      )
      const data = await resp.json()
      const cantoData = data.recordings
      setCanto(cantoData) // Salva os dados obtidos no estado
      console.log('xenocanto', cantoData)
    } catch (error) {
      console.log(error)
    }
  }

  const { condition, wind_kph, temp_c, humidity, precip_mm } = meteo
  useEffect(() => {
    fetchArtwork()
    fetchGita()
    fetchEuropeana()
    fetchCats()
    // fetchDucks()
    fetchBible()
    fetchPoem()
    fetchFbi()
    fetchMeteo()
    fetchCanto()
  }, [])

  return (
    <section className="min-h-screen p-4">
      <Navbar />
      <div className="">
        <div className="grid grid-cols-2">
          <div className="max-w-2xl">
            <img
              className="h-auto max-w-full max-h-200 rounded-lg"
              src={cat.url}
              alt=""
            />
          </div>

          <div>
            <h1 className="text-9xl font-bold text-center text-red-400 mt-8 mb-4 tracking-wider">
              trágide
            </h1>

            <div>
              <p className="text-l tracking-wider ml-6 mt-6 text-center">
                {bible.text}
              </p>
              <p className="text-l  ml-6 mt-2 text-center">
                {bible.book} <span></span>
                {bible.chapter}:{bible.verse}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2 h-max-full">
              <div>
                <h1 className="text-xl ml-6 mt-6">{poem.title}</h1>
                <h1 className="text-xl ml-6 my-2"> by {poem.author}</h1>

                {poem.lines?.map((line, index) => (
                  <p key={index} className="ml-6 my-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            {meteo?.condition && (
              <div>
                <h1 className="text-2xl font-bold ml-6 mt-6">Forecast</h1>
                <h1 className="text-xl ml-6 mt-6">Cloud: {meteo.cloud}</h1>
                <h1 className="text-xl ml-6 my-2">
                  Humidity: {meteo.humidity}%
                </h1>
                <h1 className="text-xl ml-6 my-2">
                  Wind Speed: {meteo.wind_kph} km/h
                </h1>
                <h1 className="text-xl ml-6 my-2">
                  Temperature: {meteo.temp_c}°C
                </h1>
                <h1 className="text-xl ml-6 my-2">
                  Precipitation: {meteo.precip_mm} mm
                </h1>
                {/* Acedendo ao icon da condição */}
                <img src={meteo.condition.icon} alt="Weather icon" />
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold ml-6 mt-6 text-center">Cantos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
            {canto.map((item) => {
              const { id, en, gen, grp, loc, rmk, file } = item
              const audioUrl = file.startsWith('https://')
                ? file
                : `https:${file}` // Certificando-se de que a URL começa com 'https://'

              // Verifique a URL do áudio no console
              console.log(audioUrl) // Adicione este log para depurar

              return (
                <div key={id} className="grid gap-4 align-top">
                  <div>
                    <p>{en}</p>
                    <h2 className="text-lg font-semibold p-4">{gen}</h2>
                    <h2 className="text-lg font-semibold p-4">{loc}</h2>
                    <audio controls>
                      <source src={audioUrl} type="audio/wav" />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <h2 className="text-xl font-bold ml-6 mt-6 text-center">Artworks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
          {artwork.map((artwork) => {
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
        <div className="">
          <h2 className="text-xl font-bold ml-6 mt-6 text-center">
            Bhagavad Gita Chapters
          </h2>
          <ul className="list-disc m-5">
            {gita.map((gitaItem) => {
              const { chapter_number, name, meaning, summary } = gitaItem

              return (
                <div
                  key={chapter_number}
                  className="leading-loose tracking-wider text-justify grid grid-cols-[1fr_1fr_5fr] gap-4"
                >
                  <p className="flex justify-self-auto">{name}</p>
                  <p>{meaning.en}</p>
                  <p>{summary.en}</p>
                  <p></p>
                </div>
              )
            })}
          </ul>
        </div>
        <h2 className="text-xl font-bold ml-6 mt-6 text-center">Europeana</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
          {europeana.map((euro) => {
            const {
              title: [rawTitle],
              dcCreator: [authorURI] = [],
              edmPreview: [thumbnail] = [],
              edmIsShownBy: [fullImage] = [],
              dcDescription = [],
              edmIsShownAt: [originalLink] = [],
              rights: [license] = [],
              country: [country] = [],
              provider: [provider] = [],
              guid,
            } = euro
            const description = dcDescription[0] || 'Sem descrição'
            const author = authorURI || 'Unknown'
            return (
              <div className="">
                <h2 className="text-lg font-semibold p-4">{rawTitle}</h2>
                <img
                  src={fullImage}
                  alt={rawTitle}
                  className="h-auto max-w-full rounded-lg"
                />
                {/* <p className="p-4">{author}</p>
              <p className="p-4">{country}</p> */}
                {/* <p className="p-4">
          <strong>Descrição:</strong> {description}
        </p> */}
              </div>
            )
          })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4">
          {fbi.map((item, index) => {
            const {
              poster_classification,

              date_of_birth_used,
              description,
              details,
              eyes,
              hair,
              images,
              path,
              publication,
              race,
              remarks,
              sex,
              reward_text,
              subjects,
              title,
              url,
              weight,
            } = item

            function stripHtml(htmlString) {
              const tempDiv = document.createElement('div')
              tempDiv.innerHTML = htmlString
              return tempDiv.textContent || tempDiv.innerText || ''
            }
            return (
              <div key={index} className="grid gap-4 align-top">
                <div>
                  <h2 className="text-lg text-center font-semibold m-2">
                    {stripHtml(poster_classification)}
                  </h2>
                  {/* <h2 className="text-xs tracking-wide text-justify  ">
                    {stripHtml(details)}
                  </h2>
                  <h2 className="text-xs tracking-wide text-justify  ">
                    <span className="underline">reward</span>{' '}
                    {stripHtml(remarks)}
                  </h2> */}
                  {/* <h2 className="text-xs tracking-wide text-justify  ">
                    {stripHtml(reward_text)}
                  </h2> */}
                  {/* <h2 className="text-xs tracking-wide text-justify  ">
                    eyes:{stripHtml(eyes)} <br /> hair:{stripHtml(hair)}
                    <br /> race:{stripHtml(race)}
                    <br /> weight:{stripHtml(weight)}
                    <a href={url}>Algo</a>
                  </h2> */}

                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={images[0].original}
                    alt=""
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default App
