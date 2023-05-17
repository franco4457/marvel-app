'use client'

import { useCharactersSelector } from '@/hooks/store'
import Link from 'next/link'
import React from 'react'

const PAGS: Array<number> = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]
export default function Paginate ({ to }: { to: string }) {
  const { filters } = useCharactersSelector()
  const query = filters ? `?${filters}` : ''
  return (
    <>
    <div className="flex flex-row gap-2">
      {PAGS.map((page, i) => (
        <>
          <Link key={i} href={`${to}/${page}${query}`} >
            <button className='bg-slate-800 rounded-sm px-2'>
            {page}
            </button>
          </Link>
        </>
      ))}
      </div>
    </>
  )
}
