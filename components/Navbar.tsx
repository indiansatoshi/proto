'use client'
import Link from 'next/link'
import { Button } from './ui/button'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto h-16 grid grid-cols-[1fr,auto,1fr] sm:grid-cols-3 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-block">
          <span className="font-bold text-lg sm:text-xl hover:text-primary transition-colors cursor-pointer">
            Proto
          </span>
        </Link>
        <div className="flex justify-center gap-2 sm:gap-4">
          <Link href="/datasets">
            <Button variant="ghost" className="px-2 sm:px-4">Datasets</Button>
          </Link>
          <Link href="/models">
            <Button variant="ghost" className="px-2 sm:px-4">Models</Button>
          </Link>
          <Link href="/ai-studio">
            <Button variant="ghost" className="px-2 sm:px-4">AI Studio</Button>
          </Link>
        </div>
        <div /> {/* Empty div for grid balance */}
      </div>
    </nav>
  )
}
