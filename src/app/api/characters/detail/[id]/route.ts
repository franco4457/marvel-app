import { getDataMarvelAPI } from '@/lib/marvel'
import { NextResponse } from 'next/server'

export async function GET (req: Request, { params }:{params: {id:string}}) {
  const { id } = params
  const data = await getDataMarvelAPI(`/characters/${id}`)
  const results = data?.results || []

  return NextResponse.json({ data: results[0] || {} })
}
