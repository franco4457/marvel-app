import { MarvelCharacterDataContainer } from '@/types/marveTypes'
import Character from './Character'
import { BASE_URL } from '@/utils/utils'

interface getCharParameters {
  page?: string
  query?: string
}

export const getCharacters = async ({ page, query }: getCharParameters = {}) => {
  const offset = `offset=${page ? Number(page) * 20 : 0}`
  const setQuery = page || query ? `/${offset}${query ? `&${query}` : ''} ` : ''
  const res = await fetch(`${BASE_URL}/api/characters${setQuery}`)
  const data = await res.json()
  const responseCharacter: MarvelCharacterDataContainer = data.data
  return responseCharacter
}

export default async function Characters({page, query}: getCharParameters = {}) {
  const characters = (await getCharacters({page, query})).results

  return (
    <>
      <section className="w-screen overflow-hidden">
        <div className="flex snap-x snap-mandatory overflow-x-auto gap-4">
          {characters &&
            characters?.map((data, i: number) => {
              return <Character key={i} character={data} />
            })}
        </div>
      </section>
    </>
  )
}
