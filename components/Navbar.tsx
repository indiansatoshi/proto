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
    <nav className="border-b">
      <div className="container mx-auto h-16 grid grid-cols-[1fr,auto,1fr] sm:grid-cols-3 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-block">
          <span className="font-bold text-lg sm:text-xl hover:text-primary transition-colors cursor-pointer">
            Proto
          </span>
        </Link>
        <div className="flex justify-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button 
                variant="ghost" 
                className={cn(
                  "px-2 sm:px-4 hover:bg-secondary",
                  pathname === item.href && "bg-secondary"
                )}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <Button 
            variant={isConnected ? "secondary" : "default"}
            onClick={handleConnect}
            className="px-4"
          >
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
