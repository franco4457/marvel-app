import { getCharacters } from '@/utils/utils'
import { getCharParameters } from '@/types/generalTypes'
import Character from '@/app/components/Character'

export default async function Characters ({ page, query }: getCharParameters = {}) {
  const characters = (await getCharacters({ page, query }))?.results || []

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
