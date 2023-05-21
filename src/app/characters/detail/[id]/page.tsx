import React from 'react'
import CharacterCard from '@/app/characters/detail/[id]/components/character-detail'

export default function page ({ params }:{params:{id:string}}) {
  console.log(params.id)
  return (
    <div>
      {/* @ts-expect-error Async Server Component */}
      <CharacterCard id={params.id} />
    </div>
  )
}
