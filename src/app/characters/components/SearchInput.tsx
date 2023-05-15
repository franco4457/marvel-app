'use client'

import { ChangeEvent, useState } from 'react'

export default function SearchInput() {
  const [input, setInput] = useState('')

  const handlerInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setInput(value)
  }
  return (
    <div>
      <label htmlFor="search">
        Search character
        <input
          type="text"
          value={input}
          name="search"
          placeholder="Iron-man"
          className="text-slate-900"
          onChange={handlerInputChange}
        />
      </label>
    </div>
  )
}
