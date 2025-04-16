import { useState, useEffect } from 'react'
import { Button } from './button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog'
import { Form } from './form'
import { FormField } from './form-field'

export interface BaseTabProps<T> {
  title?: string
  description?: string
  endpoint: string
  filterModels?: (models: T[]) => T[]
  columns: { key: string; label: string }[]
  onAdd?: () => void
  onEdit?: (item: T) => void
  onDelete?: (id: string) => void
  renderItem?: (item: T) => React.ReactNode
  addButtonText?: string
  className?: string
  renderAddForm?: (props: { onSubmit: (data: Partial<T>) => void; onCancel: () => void; isLoading: boolean }) => React.ReactNode
  renderEditForm?: (props: { item: T; onSubmit: (data: Partial<T>) => void; onCancel: () => void; isLoading: boolean }) => React.ReactNode
  isLoading?: boolean
}

export function BaseTab<T>({
  title,
  description,
  endpoint,
  filterModels,
  columns,
  onAdd,
  onEdit,
  onDelete,
  renderItem,
  addButtonText = 'Add',
  className,
  renderAddForm,
  renderEditForm,
  isLoading = false
}: BaseTabProps<T>) {
  const [items, setItems] = useState<T[]>([])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<T | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchItems()
  }, [endpoint])

  const fetchItems = async () => {
    try {
      const response = await fetch(endpoint)
      const data = await response.json()
      setItems(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching items:', error)
      setItems([])
    }
  }

  const handleAdd = async (data: Partial<T>) => {
    setIsSubmitting(true)
    try {
      if (onAdd) {
        await onAdd()
      }
      await fetchItems()
      setIsAddDialogOpen(false)
    } catch (error) {
      console.error('Error adding item:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (item: T) => {
    setSelectedItem(item)
    setIsEditDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (onDelete) {
      await onDelete(id)
    }
    await fetchItems()
  }

  const handleEditSubmit = async (data: Partial<T>) => {
    setIsSubmitting(true)
    try {
      if (onEdit && selectedItem) {
        await onEdit(selectedItem)
      }
      await fetchItems()
      setIsEditDialogOpen(false)
    } catch (error) {
      console.error('Error updating item:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Ensure items is always an array
  const safeItems = Array.isArray(items) ? items : []
  const filteredItems = filterModels ? filterModels(safeItems) : safeItems

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        {(title || description) && (
          <div>
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
            {description && <p className="text-gray-500 mt-1">{description}</p>}
          </div>
        )}
        <Button onClick={() => setIsAddDialogOpen(true)}>{addButtonText}</Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column.label}
                  </th>
                ))}
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems && filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <tr key={index}>
                    {columns.map((column) => (
                      <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                        {renderItem ? renderItem(item) : (item as any)[column.key]}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button
                        variant="ghost"
                        onClick={() => handleEdit(item)}
                        className="mr-2"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleDelete((item as any).id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length + 1} className="px-6 py-4 text-center text-gray-500">
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add {title}</DialogTitle>
          </DialogHeader>
          {renderAddForm ? (
            renderAddForm({
              onSubmit: handleAdd,
              onCancel: () => setIsAddDialogOpen(false),
              isLoading: isSubmitting || isLoading
            })
          ) : (
            <Form
              title=""
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const data: Partial<T> = {}
                columns.forEach(column => {
                  data[column.key as keyof T] = formData.get(column.key) as any
                })
                handleAdd(data)
              }}
            >
              {columns.map((column) => (
                <FormField
                  key={column.key}
                  name={column.key}
                  label={column.label}
                  type="text"
                />
              ))}
            </Form>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit {title}</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            renderEditForm ? (
              renderEditForm({
                item: selectedItem,
                onSubmit: handleEditSubmit,
                onCancel: () => setIsEditDialogOpen(false),
                isLoading: isSubmitting || isLoading
              })
            ) : (
              <Form
                title=""
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const data: Partial<T> = {}
                  columns.forEach(column => {
                    data[column.key as keyof T] = formData.get(column.key) as any
                  })
                  handleEditSubmit(data)
                }}
              >
                {columns.map((column) => (
                  <FormField
                    key={column.key}
                    name={column.key}
                    label={column.label}
                    type="text"
                    defaultValue={(selectedItem as any)[column.key]}
                  />
                ))}
              </Form>
            )
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
} 