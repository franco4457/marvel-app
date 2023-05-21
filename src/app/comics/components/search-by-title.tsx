'use client'

import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

export default function SearchByTitle () {
  const [searchByTitle, setSearchByTitle] = useState('')
  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchByTitle(value)
  }
  return (
    <>
      <div>
        <label htmlFor="searchByTitle" className='pr-3'>Search by title</label>
        <input
        className='text-black'
          type="text"
          name="searchByTitle"
          value={searchByTitle}
          onChange={handlerInputChange}
          placeholder='title'
        />
        <Link href={`/comics?title=${searchByTitle}`}>
        <button>Search</button>
        </Link>
      </div>
    </>
  )
}
