import Comics from '@/app/comics/components/comics'
import SearchByTitle from '@/app/comics/components/search-by-title'
type searchParams = {
  title: string,
}
interface props{
    searchParams:searchParams
}

export default function Page ({ searchParams }:props) {
  const { title } = searchParams
  const query = title ? `title=${title}` : ''
  return (
    <>
      <main className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl pt-6 pb-4">Comics Marvel</h1>
        <SearchByTitle />
        {/* @ts-expect-error Async Server Component */}
        <Comics query={query} />
      </main>
    </>
  )
}
