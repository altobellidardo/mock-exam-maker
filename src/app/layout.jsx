import { Inter } from 'next/font/google'
import './globals.css'

import Providers from './providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mock Exam Maker',
  description: 'Generate mock exam questions and answers'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className + ' bg-orange-200 min-h-screen w-screen md:w-[80vw] lg:w-[70vw] mx-auto'}>
        <Providers>
          <Navbar />
          <section className='bg-orange-200'>
            {children}
          </section>
        </Providers>
      </body>
    </html>
  )
}
