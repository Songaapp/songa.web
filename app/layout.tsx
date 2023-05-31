import { NavBar } from '@/components'
import './globals.css'
import { useState } from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'Songa',
  description: 'This is an app made to help you get comfortable with premium rides.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        {children}</body>
    </html>
  )
}
