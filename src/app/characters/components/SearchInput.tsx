'use client'

import { useAppDispatch } from '@/hooks/store'
import { setFilters } from '@/redux/characters/slice'
import { ChangeEvent, useState } from 'react'

export default function SearchInput () {
  const [searchByName, setSearchByName] = useState('')
  const dispatch = useAppDispatch()
  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchByName(value)
  }
  const handleSearchSumbit = () => {
    const filter = `name=${searchByName}`
    dispatch(setFilters(filter))
  }
  return (
    <div className='flex gap-4'>
      <label htmlFor="searchByName">
        Search character by name
        </label>
        <input
          type="text"
          value={searchByName}
          name="searchByName"
          placeholder="Iron-man"
          className="text-slate-900"
          onChange={handlerInputChange}
        />
      <button onClick={handleSearchSumbit} >Search</button>
    </div>
  )
}
