import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Twelvve',
  description: 'Portfolio of the King',
}

import NavLayout from './components/Layout'
import StoreProvider from './provider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{<StoreProvider><NavLayout>{children}</NavLayout></StoreProvider> }</body>
    </html>
  )
}
