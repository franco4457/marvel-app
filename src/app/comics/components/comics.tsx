import { getComics } from '@/utils/utils'
import Comic from '@/app/comics/components/comic'

export default async function Comics () {
  const { results } = await getComics()

  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-screen'>
        {results &&
          results.map((comic) => <Comic key={comic.id} comic={comic} />)}
      </div>
    </>
  )
}
