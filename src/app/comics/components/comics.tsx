import { getComics } from '@/utils/utils'
import Comic from '@/app/comics/components/comic'

interface props{
  query?: string
  page?: string
}

export default async function Comics ({ query, page }:props) {
  const { results } = await getComics({ page, query })

  return (
    <>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-screen'>
        {results &&
          results.map((comic) => <Comic key={comic.id} comic={comic} />)}
      </div>
    </>
  )
}
