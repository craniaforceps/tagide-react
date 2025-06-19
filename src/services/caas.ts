// não está a ser usada

import { caasAPI } from '../api/https'

export async function fetchCaasCatSaysTagide() {
  const response = await caasAPI.get(
    'cat/says/tagide?fontSize=200&fontColor=red'
  )

  return response.data
}
