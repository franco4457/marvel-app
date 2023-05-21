import Characters from '@/app/components/Characters'
import Link from 'next/link'
import Comics from './components/comics'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-mono text-sm flex text-center">
        <h1 className="text-xl">Marvel APP</h1>
        <Link href="/characters">
          <button className="bg-marvelRed px-2 ">Go to Characters</button>
        </Link>
        {/* @ts-expect-error Async Server Component */}
        <Characters />
        <Link href="/comics">
          <button className="bg-marvelRed px-2 ">Go to Comics</button>
        </Link>
        {/* @ts-expect-error Async Server Component */}
        <Comics />
      </div>
    </main>
  )
}
