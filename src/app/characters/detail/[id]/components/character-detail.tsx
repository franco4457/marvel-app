import { getCharacter } from '@/utils/utils'
import Image from 'next/image'

interface CharacterCard {
  id:string
}

export default async function CharacterDetail ({ id }:CharacterCard) {
  const { name, thumbnail, description, comics, series, events, stories, modified } = await getCharacter(id)
  const img = `${thumbnail?.path}.${thumbnail?.extension}`
  return (
    <div>
      <h1>Character Detail</h1>
      <p>Character ID: {id}</p>
      <h2>Name of Character: {name}</h2>
      <h3>Last modified: {modified}</h3>
      <p>{description}</p>
      <Image src={img} width="300" alt="imagen" height="300" />
      <h1>Comics</h1>
      <ul>
        {comics?.items?.map((comic, i) => (
          <li key={i}>{comic.name}</li>
        ))}
      </ul>
      <h1>Series</h1>
      <ul>
        {series?.items?.map((series, i) => (
          <li key={i}>{series.name}</li>
        ))}
      </ul>
      <h1>Events</h1>
      <ul>
        {events?.items?.map((event, i) => (
          <li key={i}>{event.name}</li>
        ))}
      </ul>
      <h1>Stories</h1>
      <ul>
        {stories?.items?.map((story, i) => (
          <li key={i}>{story.name}</li>
        ))}
      </ul>
    </div>
  )
}
