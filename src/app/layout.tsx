import SiderBar from '@/components/SiderBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photo App',
  description: 'A Photo App built with Next.js and Cloudinary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
        <Header/>
        <div className='flex'>
        <SiderBar/>
        {children}
        </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
