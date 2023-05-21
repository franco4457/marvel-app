import ComicCardDetail from '@/app/comics/detail/[id]/components/comic-card-detail'

interface props {
params:{id:string}
}

export default function page ({ params }:props) {
  return (
    <main>
    {/* @ts-expect-error Async Server Component */}
        <ComicCardDetail id={params.id}/>
    </main>
  )
}
