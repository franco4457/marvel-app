import { getDataMarvelAPI } from '@/lib/marvel'
import { NextResponse } from 'next/server'
export async function GET() {
  const res = await getDataMarvelAPI('/characters')
  return NextResponse.json({ data: res })
}
