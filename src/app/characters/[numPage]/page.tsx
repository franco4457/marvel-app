import Characters from '@/app/components/Characters'
import React from 'react'

export default function page({ params }:{params:{numPage: string}}) {
  return (
    <>
      <div>
        {/* @ts-expect-error Async Server Component */}
        <Characters page={params.numPage}/>
      </div>
    </>
  )
}
