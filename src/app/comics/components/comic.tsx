import { MarvelComic } from '@/types/marvel-comics'
import Image from 'next/image'

interface props {
    comic: MarvelComic
}
export default function Comic ({ comic }:props) {
  const { thumbnail, title } = comic
  const image = `${thumbnail.path}.${thumbnail.extension} `
  return (
    <>
      <section>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={200} />
      </section>
    </>
  )
}
