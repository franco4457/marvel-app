'use client'

import { useCharactersSelector } from '@/hooks/store'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const PAGS: Array<number> = []

export default function Paginate ({ to }: { to: string }) {
  const { filters } = useCharactersSelector()
  const [pages, setPages] = useState<number>()

  useEffect(() => {
    if (pages == null) {
      const $pages = document.querySelector('#characters_pages')?.innerHTML
      const pgs = Number($pages) || 0
      setPages(pgs)
    } else {
      for (let i = 1; i < pages && i < 11; i++) {
        PAGS.push(i)
      }
    }
  }, [pages])

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
