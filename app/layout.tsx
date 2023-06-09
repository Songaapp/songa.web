import { NavBar } from '@/app/components'
import './globals.css'
import { useState } from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/app/components/Elements/Footer'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <NavBar />
        {children}</body>
        <Footer />
    </html>
  )
}
