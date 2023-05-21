'use client'

import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

export default function SearchInput () {
  const [searchByName, setSearchByName] = useState('')
  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchByName(value)
  }
  return (
    <div className="flex gap-4">
      <label htmlFor="searchByName">Search character by name</label>
      <input
        type="text"
        value={searchByName}
        name="searchByName"
        placeholder="Iron-man"
        className="text-slate-900"
        onChange={handlerInputChange}
      />
      <Link href={`/characters?name=${searchByName}`} >
        <button >Search</button>
      </Link>
    </div>
  )
}
