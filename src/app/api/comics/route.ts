import { getDataMarvelAPI } from '@/lib/marvel'
import { ComicsData } from '@/types/marvel-comics'
import { NextResponse } from 'next/server'

export async function GET (req: Request) {
  // extract search parameters of url
// const { searchParams } = new URL(req.url)
// const query = setQueryCharacters(searchParams)

  const res:ComicsData = await getDataMarvelAPI('/comics')
  return NextResponse.json({ data: res })
}
