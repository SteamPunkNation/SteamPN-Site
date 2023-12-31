import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Steampn.net',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  )
}
