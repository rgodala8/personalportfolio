import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ritya Godala - Portfolio',
  description: 'Personal portfolio of Ritya Godala',
  metadataBase: new URL('https://rityagodala.com'),
  openGraph: {
    title: 'Ritya Godala - Portfolio',
    description: 'Personal portfolio of Ritya Godala',
    url: 'https://rityagodala.com',
    siteName: 'Ritya Godala',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritya Godala - Portfolio',
    description: 'Personal portfolio of Ritya Godala',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

