// src/lib/http.js
import axios from 'axios'

//BIBLE API
export const bibleAPI = axios.create({
  baseURL: 'https://bible-api.com',
})

//POEM DB API
export const poemAPI = axios.create({
  baseURL: 'https://poetrydb.org',
})

//vEDIC SCRIPTURES API
export const gitaAPI = axios.create({
  baseURL: 'https://vedicscriptures.github.io',
})

// FBI API
export const fbiAPI = axios.create({
  baseURL: 'https://api.fbi.gov/wanted/v1',
})

// ART INSTITUTE OF CHICAGO API
export const articAPI = axios.create({
  baseURL: 'https://api.artic.edu/api/v1',
})

//WEATHER API
// api/https.js

export const meteoAPI = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  params: {
    key: import.meta.env.VITE_API_KEY_METEO,
  },
  timeout: 10000, // 10 seconds timeout
})

//CAT API
export const catAPI = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  params: {
    api_key: import.meta.env.VITE_API_KEY_CAT,
  },
})

export const xenoCantoAPI = axios.create({
  baseURL: 'https://xeno-canto.org/api/3',
  params: {
    key: import.meta.env.VITE_API_KEY_CANTO,
  },
  timeout: 15000, // Aumente o timeout se necessário
})

//EUROPEANA API
export const europeanaAPI = axios.create({
  baseURL: 'https://api.europeana.eu/record/v2/',
  params: {
    wskey: import.meta.env.VITE_API_KEY_EUROPEANA, // Europeana usa "wskey" não "api_key"
    profile: 'rich',
    media: 'true',
  },
  timeout: 10000,
})

//CAT AS A SERVICE
export const caasAPI = axios.create({
  baseURL: 'https://cataas.com/',
  params: {},
  timeout: 10000,
})
