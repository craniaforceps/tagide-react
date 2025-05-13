import { poemAPI } from '../api/https'

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
  return getRandomPoem(response.data)

  // const randomResponse = getRandomPoem(response)
  // console.log('randomresponse', randomResponse)

  return response.data
}
