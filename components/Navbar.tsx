'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    setIsConnected(!isConnected)
  }

  const navItems = [
    { href: '/datasets', label: 'Datasets' },
    { href: '/models', label: 'Models' },
    { href: '/ai-studio', label: 'AI Studio' },
  ]

  return (
    <nav className="border-b bg-resolutionBlue">
      <div className="container mx-auto h-16 grid grid-cols-[1fr,auto,1fr] sm:grid-cols-3 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-block">
          <span className="font-bold text-lg sm:text-xl text-white hover:text-resolutionBlue/80 transition-colors cursor-pointer">
            Proto
          </span>
        </Link>
        <div className="flex justify-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-white px-2 sm:px-4 py-2 transition-colors border-b-2 border-transparent hover:border-resolutionBlue hover:text-white focus:border-resolutionBlue focus:text-white",
                pathname === item.href && "border-white text-white font-bold"
              )}
              style={{ textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <Button 
            variant={isConnected ? "secondary" : "default"}
            onClick={handleConnect}
            className="px-4 bg-white text-resolutionBlue hover:bg-white/90 border border-white"
          >
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
