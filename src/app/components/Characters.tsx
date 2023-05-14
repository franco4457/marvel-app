import { MarvelCharacterDataContainer } from '@/types/marveTypes'
import Character from './Character'
import { BASE_URL } from '@/utils/utils'

const getCharacters = async () => {
  const res = await fetch(`${BASE_URL}/api/characters`)
  const  data  = await res.json()
  const responseCharacter:MarvelCharacterDataContainer = data.data
  return responseCharacter
}

export default async function Characters() {
 
  const characters = (await getCharacters()).results

  return (
    <div>
      {characters &&
        characters?.map((data, i: number) => {
          return (
            <Character key={i} character={data}/>
          )
        })}
    </div>
  )
}

