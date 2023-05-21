import { getComic } from '@/utils/utils'
import Image from 'next/image'

interface props{
     id: string
}

export default async function ComicCardDetail ({ id }:props) {
  const { title, thumbnail, format, creators } = await getComic(id)
  const image = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <h1>{title}</h1>
        <h2>Comic id: {id}</h2>
        <Image src={image} alt={`image of ${title}`} width="300" height="300" />
        <h3>Format: {format}</h3>
        <h3>Creators</h3>
        {creators.items.map(({ name }, i) => {
          return <p key={i}>{name}</p>
        })}

      </section>
    </>
  )
}
