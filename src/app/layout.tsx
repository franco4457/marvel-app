// import ReduxProvider from '@/redux/ReduxProvider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marvel App',
  description: 'Marvel application'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <ReduxProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    // </ReduxProvider>
  )
}
