import Characters from '@/app/characters/components/Characters'
import SearchInput from '@/app/characters/components/SearchInput'
import Paginate from '@/app/components/paginate'
import { propSearchParams } from '@/app/characters/[numPage]/page'

type props ={
  searchParams: propSearchParams
}

export default function Page ({ searchParams }:props) {
  const name = searchParams?.name
  const query = name ? `name=${name}` : ''

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-mono text-sm flex text-center gap-6">
        <h1 className="text-xl">Marvel APP</h1>
        <SearchInput />
        <Paginate to="/characters" query={query} pageSelector='characters_pages' />
        {/* @ts-expect-error Async Server Component */}
        <Characters query={query} />
      </div>
    </main>
  )
}
