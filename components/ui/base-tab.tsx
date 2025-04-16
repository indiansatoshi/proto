import { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { Button } from './button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './dialog'
import { Form } from './form'
import { FormField } from './form-field'

export interface BaseTabProps<T> {
  title?: string
  description?: string
  endpoint?: string
  items?: T[]
  filterModels?: (models: T[]) => T[]
  columns: { key: string; label: string }[]
  onAdd?: (data: Partial<T>) => void | Promise<void>
  onEdit?: (id: string, data: Partial<T>) => void | Promise<void>
  onDelete?: (id: string) => void | Promise<void>
  renderItem?: (item: T) => React.ReactNode
  addButtonText?: string
  className?: string
  renderAddForm?: (props: { onSubmit: (data: Partial<T>) => void; onCancel: () => void; isLoading: boolean }) => React.ReactNode
  renderEditForm?: (props: { item: T; onSubmit: (data: Partial<T>) => void; onCancel: () => void; isLoading: boolean }) => React.ReactNode
  isLoading?: boolean
  hideAddButton?: boolean
  pageSize?: number
}

export interface BaseTabRef {
  setIsAddDialogOpen: (open: boolean) => void
  setIsEditDialogOpen: (open: boolean) => void
  setSelectedItem: (item: any | null) => void
  openAddDialog: () => void
}

export const BaseTab = forwardRef<BaseTabRef, BaseTabProps<any>>(({
  title,
  description,
  items = [],
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
  isLoading = false,
  hideAddButton = false,
  pageSize = 7
}, ref) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // Reset page when items or filter changes
  useEffect(() => {
    setCurrentPage(1)
  }, [items, filterModels])

  const handleAdd = async (data: Partial<any>) => {
    setIsSubmitting(true)
    try {
      if (onAdd) {
        await onAdd(data)
      }
      setIsAddDialogOpen(false)
    } catch (error) {
      console.error('Error adding item:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (item: any) => {
    setSelectedItem(item)
    setIsEditDialogOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (onDelete) {
      await onDelete(id)
    }
  }

  const handleEditSubmit = async (data: Partial<any>) => {
    setIsSubmitting(true)
    try {
      if (onEdit && selectedItem) {
        await onEdit(selectedItem.id, data)
      }
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

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize))
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize, filteredItems.length)
  const currentItems = filteredItems.slice(startIndex, endIndex)

  console.log('Pagination Debug:', {
    totalItems: filteredItems.length,
    pageSize,
    currentPage,
    startIndex,
    endIndex,
    totalPages,
    itemsOnCurrentPage: currentItems.length
  })

  // Ensure current page is valid
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(Math.max(1, totalPages))
    }
  }, [currentPage, totalPages])

  useImperativeHandle(ref, () => ({
    setIsAddDialogOpen,
    setIsEditDialogOpen,
    setSelectedItem,
    openAddDialog: () => setIsAddDialogOpen(true)
  }))

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-6">
        {(title || description) && (
          <div>
            {title && <h2 className="text-2xl font-bold">{title}</h2>}
            {description && <p className="text-gray-500 mt-1">{description}</p>}
          </div>
        )}
        {!hideAddButton && (
          <Button onClick={() => setIsAddDialogOpen(true)}>
            {addButtonText}
          </Button>
        )}
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
              {currentItems && currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                  <tr key={item.id || index}>
                    {renderItem ? (
                      <td colSpan={columns.length} className="px-6 py-4 whitespace-nowrap">
                        {renderItem(item)}
                      </td>
                    ) : (
                      columns.map((column) => (
                        <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                          {column.key === 'createdAt' ? 
                            new Date(item[column.key]).toLocaleDateString() :
                            item[column.key]
                          }
                        </td>
                      ))
                    )}
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

        {/* Pagination */}
        {filteredItems.length > 0 && (
          <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">
                Showing {startIndex + 1}-{endIndex} of {filteredItems.length} items
              </span>
              <span className="text-sm text-gray-500">
                (Page {currentPage} of {totalPages})
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
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
                const data: Partial<any> = {}
                columns.forEach(column => {
                  data[column.key] = formData.get(column.key) as any
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
                  const data: Partial<any> = {}
                  columns.forEach(column => {
                    data[column.key] = formData.get(column.key) as any
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
}) 