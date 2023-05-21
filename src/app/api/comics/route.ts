import { getDataMarvelAPI } from '@/lib/marvel'
import { ComicsData } from '@/types/marvel-comics'
import { NextResponse } from 'next/server'
import { setQueryComic } from './set-query-comic'

export async function GET (req: Request) {
  // extract search parameters of url
  const { searchParams } = new URL(req.url)
  const query = setQueryComic(searchParams)
  const res:ComicsData = await getDataMarvelAPI('/comics', query)
  return NextResponse.json({ data: res })
}
