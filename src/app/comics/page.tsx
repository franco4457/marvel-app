import Comics from '@/app/comics/components/comics'
type searchParams = object
interface props{
    searchParams:searchParams
}

export default function Page ({ searchParams }:props) {
  return (
    <>
      <main className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl pt-6 pb-4">Comics Marvel</h1>

        {/* @ts-expect-error Async Server Component */}
        <Comics />
      </main>
    </>
  )
}
