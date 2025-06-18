import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yash Portfolio',
  description: 'Created by Yash',
  generator: 'Yash.Singh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
