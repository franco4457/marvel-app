import { MarvelCharacterDataWrapper } from '@/types/marveTypes'

const crypto = require('crypto')
const { MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } = process.env

export const getDataMarvelAPI = async (path: string, query?: string) => {
  const ts = Date.now()
  const hash = crypto
    .createHash('md5')
    .update(`${ts}${MARVEL_PRIVATE_KEY}${MARVEL_PUBLIC_KEY}`)
    .digest('hex')
  const API_KEY = `ts=${ts}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`
  const response = await fetch(
    `https://gateway.marvel.com/v1/public${path}?${API_KEY}${
      query ? `&${query}` : ''
    }`
  )
  const data: MarvelCharacterDataWrapper = await response.json()
  return data.data
}
