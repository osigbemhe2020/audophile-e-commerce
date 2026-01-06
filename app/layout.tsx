import type { Metadata } from "next";
import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'HNG E-Commerce App',
  description: 'Your modern store built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}

