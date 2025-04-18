import './globals.css'
import { Montserrat } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

const montserrat = Montserrat({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata = {
  title: 'Proto',
  description: 'Proto Application Interface',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="theme-custom min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-2 sm:py-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
