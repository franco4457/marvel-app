import { getComics } from '@/utils/utils'
import Comic from '@/app/comics/components/comic'

interface props{
  query?: string
  page?: string
}

export default async function Comics ({ query, page }:props) {
  const { results, total = 0, limit = 0 } = await getComics({ page, query })

  const pgs = Math.ceil((total / limit) || 1)
  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-3/4'>
      <span className='hidden' id='comics_pages' >{pgs}</span>
        {results &&
          results.map((comic) => <Comic key={comic.id} comic={comic} />)}
      </div>
    </>
  )
}
