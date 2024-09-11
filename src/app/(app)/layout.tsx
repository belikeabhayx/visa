import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/(app)/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Province',
  description:
    'Discover unmatched painting services that set the standard for excellence. Let us transform your space with meticulous craftsmanship and a flawless finish, delivering results that truly stand out.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  )
}
