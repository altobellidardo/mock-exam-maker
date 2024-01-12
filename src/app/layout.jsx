import { Inter } from 'next/font/google'
import './globals.css'

import Providers from './providers'
import Navbar2 from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mock Exam Maker',
  description: 'Generate mock exam questions and answers'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className + ' bg-orange-200 min-h-screen'}>
        <Providers>
          <Navbar2 />
          <section className='bg-orange-200 min-h-[90vh]'>
            {children}
          </section>
        </Providers>
      </body>
    </html>
  )
}
