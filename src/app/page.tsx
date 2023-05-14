import Characters from '@/app/components/Characters'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-mono text-sm flex text-center">
        <h1 className="text-xl">Marvel APP</h1>
        {/* @ts-expect-error Async Server Component */}
        <Characters />
      </div>
    </main>
  )
}
