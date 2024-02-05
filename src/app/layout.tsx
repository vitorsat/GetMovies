import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import '../css/globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Get Movies',
  description: 'Get Movies'
}

// aqui é onde eu posso colocar um context por exemplo

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
