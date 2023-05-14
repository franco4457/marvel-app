import Link from 'next/link'
import React from 'react'

const PAGS: Array<number> = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10]
export default function Paginate({ to }: { to: string }) {
  return (
    <>
      {PAGS.map((page, i) => (
        <>
          <Link key={i} href={`${to}/${page}`} className='flex flex-row'>
            <button className='bg-slate-800 rounded-sm'>
            {page}
            </button>
          </Link>
        </>
      ))}
    </>
  )
}
