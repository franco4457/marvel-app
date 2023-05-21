'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface props {
  to: string
  query: string
}
const PAGS: Array<number> = []

export default function Paginate ({ to, query }:props) {
  const [pages, setPages] = useState(PAGS)

  useEffect(() => {
    // I retrieve the number of pages
    const $pages =
      Number(document.querySelector('#characters_pages')?.innerHTML) || 0
    if ($pages > 1) {
      const total: Array<number> = []

      for (let i = 0; i < $pages && i < 10; i++) {
        total.push(i + 1)
      }

      setPages(total)
    } else {
      setPages(PAGS)
    }
  }, [query])

  const queryset = query ? `?${query}` : ''
  return (
    <>
    <div className="flex flex-row gap-2">
      {pages.map((page, i) => (
        <>
          <Link key={i} href={`${to}/${page}${queryset}`} >
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
