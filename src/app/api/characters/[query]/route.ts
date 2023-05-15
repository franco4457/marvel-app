import { getDataMarvelAPI } from '@/lib/marvel'
import { NextResponse } from 'next/server'
export async function GET(
  request: Request,
  context: { params: { query: string } }
) {
  const { query } = context.params
  const res = await getDataMarvelAPI('/characters', query)
  return NextResponse.json({ data: res })
}
