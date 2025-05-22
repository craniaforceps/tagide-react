import { caasAPI } from '../api/https'

export async function fetchCaasCatSaysTagide() {
  const response = await caasAPI.get(
    'cat/says/tagide?fontSize=200&fontColor=red'
  )
  console.log('teste1', response)
  console.log('teste2', response.data)

  return response.data
}
