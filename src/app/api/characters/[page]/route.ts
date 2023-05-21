import { getDataMarvelAPI } from '@/lib/marvel'
import { NextResponse } from 'next/server'
import { setQueryCharacters } from '../set-query-characters'
import { setPage } from './set-page'

export async function GET (req: Request, context: { params: { page: string } }) {
  const { searchParams } = new URL(req.url)
  const querySeted = setQueryCharacters(searchParams)

  // set page
  const { page } = context.params
  const query = setPage(Number(page), querySeted)

  const res = await getDataMarvelAPI('/characters', query)
  return NextResponse.json({ data: res })
}
