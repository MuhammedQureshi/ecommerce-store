import { Urbanist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import ModalProvider from '@/providers/modal-provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'MyShop',
  description: 'MyShop - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ModalProvider />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
