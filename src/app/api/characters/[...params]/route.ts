import { getDataMarvelAPI } from '@/lib/marvel'
import { NextResponse } from 'next/server'
export async function GET(request: any, context: { params: any }) {
  console.log(context)
  const res = await getDataMarvelAPI('/characters')
  return NextResponse.json({ data: res })
}
