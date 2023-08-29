import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Made in Nigeria',
  description: 'A curation of awesome open source tools built by Nigerians for the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <h1>Navbar Component</h1>
          {children}
          <h1>Footer component</h1>
        </Providers>
      </body>
    </html>
  )
}
