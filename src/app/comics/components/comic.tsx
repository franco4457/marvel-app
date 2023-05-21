import { MarvelComic } from '@/types/marvel-comics'
import Image from 'next/image'
import Link from 'next/link'

interface props {
    comic: MarvelComic
}
export default function Comic ({ comic }:props) {
  const { thumbnail, title, id } = comic
  const image = `${thumbnail.path}.${thumbnail.extension}`
  return (
    <>
      <section>
        <Link href={`/comics/detail/${id}`}>
        <h1>{title}</h1>
        </Link>
        <Image src={image} alt={title} width={200} height={200} />
      </section>
    </>
  )
}
