import { getCharParameters } from '@/types/generalTypes'
import { MarvelCharacterDataContainer } from '@/types/marveTypes'

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://marvel-app-franco4457.vercel.app/'

export const getCharacters = async ({
  page,
  query
}: getCharParameters = {}) => {
  // Set pagination parameters
  const setPage = page ? `/${page}` : ''
  // Set filter parameters and pagination parameters for search
  const querySeted = query ? `?${query}` : ''

  const res = await fetch(`${BASE_URL}/api/characters${setPage}${querySeted}`)

  const data = await res.json()
  const responseCharacter: MarvelCharacterDataContainer = data.data
  return responseCharacter
}
