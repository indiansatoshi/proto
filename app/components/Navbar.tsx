'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 grid grid-cols-3 items-center">
        <Link href="/" className="inline-block">
          <Button variant="link" className="font-bold text-xl p-0">
            Proto
          </Button>
        </Link>
        <div className="flex justify-center gap-4">
          <Link href="/datasets">
            <Button variant="ghost">Datasets</Button>
          </Link>
          <Link href="/models">
            <Button variant="ghost">Models</Button>
          </Link>
          <Link href="/ai-studio">
            <Button variant="ghost">AI Studio</Button>
          </Link>
        </div>
        <div /> {/* Empty div for grid balance */}
      </div>
    </nav>
  )
} 