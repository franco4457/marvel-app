import { getDataMarvelAPI } from '@/lib/marvel'
import { ComicsData } from '@/types/marvel-comics'
import { NextResponse } from 'next/server'

export async function GET (req: Request, { params }:{params: {id:string}}) {
  const { id } = params
  const data: ComicsData = await getDataMarvelAPI(`/comics/${id}`)
  const results = data?.results || []

  return NextResponse.json({ data: results[0] })
}
