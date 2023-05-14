'use client'

import { MarvelCharacter, MarvelCharacterDataContainer } from '@/types/marveTypes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Character from './Character'

export default function Characters() {
  const [characters , setCharacters] = useState<MarvelCharacter[]>([])
  const fetchData = async () => {
    const res = await fetch('/api/characters')
    const  data  = await res.json()
    const responseCharacter:MarvelCharacterDataContainer = data.data
    setCharacters(responseCharacter.results || [])
  }
  useEffect(() => {
    if (!characters) fetchData()
  }, [characters])
  if (!characters) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }

  return (
    <div>
      {characters &&
        characters?.map((data, i: number) => {
          return (
            <Character key={i} character={data}/>
          )
        })}
    </div>
  )
}
