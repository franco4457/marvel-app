import { getDataMarvelAPI } from '@/lib/marvel'
import { NextResponse } from 'next/server'
import { setQueryCharacters } from './set-query-characters'
export async function GET (req: Request) {
  // extract search parameters of url
  const { searchParams } = new URL(req.url)
  const query = setQueryCharacters(searchParams)

  const res = await getDataMarvelAPI('/characters', query)

  return NextResponse.json({ data: res })
}
