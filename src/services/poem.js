import { poemAPI } from '../api/https'
import { normalizePoetry } from '../utils/normalizePoetry'

// o endpoint /random pode ser utilizado mas tem uma grande diversidade de linecount, por isso usei /linecount endpoint

//randomizador
export const getRandomPoem = (poemsArray) => {
  const randomIndex = Math.floor(Math.random() * poemsArray.length)
  return poemsArray[randomIndex]
}

//endpoint linecount/ dá-nos poemas com um determinado número de versos
export async function fetchPoemByLinecount() {
  const linecount = 10 //hardcoded
  const response = await poemAPI.get(`/linecount/${linecount}`)

  console.log(response.data)

  const randomPoem = getRandomPoem(response.data)
  console.log(normalizePoetry(randomPoem))

  return normalizePoetry(randomPoem)
}
