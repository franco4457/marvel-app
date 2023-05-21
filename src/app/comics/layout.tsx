import SearchByTitle from '@/app/comics/components/search-by-title'
interface props{
    children: React.ReactNode
}
export const metadata = {
  title: 'Marvel App | Comics'
}

export default function layout ({ children }:props) {
  return (
    <>
    <main className="flex flex-col justify-center items-center text-center gap-4">
      <h1 className="text-4xl pt-6 pb-4">Comics Marvel</h1>
      <SearchByTitle />
      {
        children
      }
      </main>
    </>
  )
}
