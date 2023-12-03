import type { Metadata } from 'next'
import { Footer, NavBar } from '@/components'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Car Showcase',
  description: 'Discover the best cars in the worlds',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
