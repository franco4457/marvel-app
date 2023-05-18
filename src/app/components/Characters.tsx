import { getCharacters } from '@/utils/utils'
import Character from './Character'
import { getCharParameters } from '@/types/generalTypes'

export default async function Characters ({ page, query }: getCharParameters = {}) {
  const { results } = await getCharacters({ page, query })

  const characters = results || []

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
