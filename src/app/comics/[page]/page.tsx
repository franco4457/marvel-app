import Comics from '@/app/comics/components/comics'
import Paginate from '@/app/components/paginate'
type searchParams = {
  title: string,
}

interface props{
    searchParams:searchParams
    params: { page: string }
}

export default function Page ({ searchParams, params }:props) {
  const { title } = searchParams
  const query = title ? `title=${title}` : ''
  return (
    <>
        <Paginate query={query} to='/comics' pageSelector='comics_pages'/>
        {/* @ts-expect-error Async Server Component */}
        <Comics query={query} page={params.page} />
    </>
  )
}
