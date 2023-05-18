import Characters from '@/app/components/Characters'
import React from 'react'

export interface propSearchParams {
  name?: string
}
interface propsCharacters {
  params: { numPage: string },
  searchParams: propSearchParams
}

export default function page ({ params, searchParams }: propsCharacters) {
  const name = searchParams?.name

  const query = name ? `name=${name}` : ''

  return (
    <>
      <div>
        {/* @ts-expect-error Async Server Component */}
        <Characters page={params.numPage} query={query} />
      </div>
    </>
  )
}
