import React from 'react'
import type { Metadata } from 'next'
import { Space_Grotesk, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '600', '700']
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Lance Jefferson | Portfolio',
  description: 'IT Student & Web Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased text-text bg-bg transition-colors duration-300 relative`}>
        <Providers>
          <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2YjcyODAiLz48L3N2Zz4=')]"></div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
