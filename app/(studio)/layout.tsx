import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Founderful',
  description: "Welcome to Founderful, make yourself at home. First up, some introductions. We're a venture fund based in Switzerland. We've been founders ourselves, and our experiences shape the way we invest. We lead with an understanding of founders, offering companionship and support as the first institutional investor.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
}
