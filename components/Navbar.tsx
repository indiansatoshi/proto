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
    <nav className="border-b bg-[var(--sidebar)] text-[var(--sidebar-foreground)] font-sans">
      <div className="container mx-auto h-16 grid grid-cols-[1fr,auto,1fr] sm:grid-cols-3 items-center gap-4 px-4 sm:px-6 lg:px-8 border-b border-[var(--sidebar-border)]">
        <Link href="/" className="inline-block">
          <span className="font-sans font-semibold text-2xl text-[var(--sidebar-primary)]">
            Proto
          </span>
        </Link>
        <div className="flex justify-center gap-2 sm:gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 font-sans font-semibold transition-colors border-b-2 border-transparent bg-transparent text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-primary)] hover:text-[var(--sidebar-primary-foreground)] hover:border-[var(--sidebar-primary)] focus:bg-[var(--sidebar-primary)] focus:text-[var(--sidebar-primary-foreground)] focus:border-[var(--sidebar-primary)]",
                pathname === item.href && "bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)] border-[var(--sidebar-primary)]"
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
            className="px-4 py-5 bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)] hover:bg-[var(--sidebar-primary)] border border-[var(--sidebar-primary)]"
          >
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </Button>
        </div>
      </div>
    </nav>
  )
}
