import React from 'react'
import { cn } from '@/lib/utils'
import { Button } from './button'

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  submitText?: string
  cancelText?: string
  onCancel?: () => void
  isLoading?: boolean
}

export function Form({
  title,
  onSubmit,
  children,
  submitText = 'Save',
  cancelText = 'Cancel',
  onCancel,
  isLoading = false,
  className,
  ...props
}: FormProps) {
  return (
    <form 
      onSubmit={onSubmit} 
      className={cn("font-sans text-foreground space-y-4", className)}
      {...props}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="space-y-4">
        {children}
      </div>
      <div className="flex justify-end gap-2 pt-4">
        {onCancel && (
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelText}
          </Button>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : submitText}
        </Button>
      </div>
    </form>
  )
} 