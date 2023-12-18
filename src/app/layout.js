import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Twelvve',
  description: 'Portfolio of the King',
}

import NavLayout from './components/Layout'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{<NavLayout>{children}</NavLayout>}</body>
    </html>
  )
}
