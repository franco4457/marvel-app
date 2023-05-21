import { getCharacters } from '@/utils/utils'
import { getCharParameters } from '@/types/generalTypes'
import Character from '@/app/components/Character'

export default async function Characters ({ page, query }: getCharParameters = {}) {
  const data = await getCharacters({ page, query })

  const total = data?.total || 0
  const limit = data?.limit || 20
  const characters = data?.results

  const pgs = Math.ceil((total / limit) || 1)
  return (
    <>
      <section className="w-screen overflow-hidden">
    <span className='hidden' id='characters_pages' >{pgs}</span>
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
