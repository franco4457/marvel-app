import { MarvelCharacter } from '@/types/marveTypes'
import Image from 'next/image'

interface CharacterProps {
  character: MarvelCharacter,
}

export default function Character ({ character }: CharacterProps) {
  const img = `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`
  return (
    <div className='snap-center flex flex-col w-[50vw] h-30'>
      <h1>{character?.name}</h1>
      <Image src={img} width="300" alt="imagen" height="300" />
    </div>
  )
}
