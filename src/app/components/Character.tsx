import { MarvelCharacter } from '@/types/marveTypes'
import Image from 'next/image'

interface CharacterProps {
  character: MarvelCharacter
}

export default function Character({ character }: CharacterProps) {
  const img = `${character?.thumbnail?.path}.${character?.thumbnail?.extension}`
  return (
    <div>
      <h1>{character?.name}</h1>
      <Image src={img} width="200" alt="imagen" height="200" />
    </div>
  )
}
