import Link from 'next/link'

export const metadata = {
  title: 'Marvel App | Comic'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Link href={'/comics'}>
          <button>Go to comics</button>
        </Link>
        {children}
      </body>
    </html>
  )
}
