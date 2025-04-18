'use client'

import { Search as SearchIcon } from 'lucide-react'
import { Input } from './input'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface SearchProps {
  placeholder?: string
  className?: string
  onSearch?: (value: string) => void
}

export function Search({ placeholder = 'Search...', className, onSearch }: SearchProps) {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onSearch?.(newValue)
  }

  return (
    <div className={cn('relative font-sans text-foreground', className)}>
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-8 h-9"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
} 