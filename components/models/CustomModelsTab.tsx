'use client'

import { useEffect, forwardRef } from 'react'
import { BaseTab, BaseTabRef } from '../ui/base-tab'
import { useCrud } from '@/lib/hooks/use-crud'
import { Model } from '@/types/models'

interface CustomModelsTabProps {
  searchQuery?: string
}

export const CustomModelsTab = forwardRef<BaseTabRef, CustomModelsTabProps>(({ searchQuery = '' }, ref) => {
  const {
    items: models,
    loading,
    error,
    fetchItems: fetchModels,
    createItem: createModel,
    updateItem: updateModel,
    deleteItem: deleteModel
  } = useCrud<Model>({
    baseUrl: '/api/models/custom',
    onError: (error) => {
      console.error('Error:', error)
    }
  })

  useEffect(() => {
    fetchModels()
  }, [fetchModels])

  const filterModels = (models: Model[]) => {
    if (!searchQuery) return models
    return models.filter(model => 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const renderAddForm = ({ onSubmit, onCancel, isLoading }: {
    onSubmit: (data: Partial<Model>) => void
    onCancel: () => void
    isLoading: boolean
  }) => (
    <div className="space-y-4">
      <p>Custom model creation form will be implemented here.</p>
      <button 
        onClick={() => onSubmit({ 
          name: 'New Custom Model', 
          type: 'llm', 
          provider: 'custom',
          architecture: 'transformer'
        })}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Creating...' : 'Create Custom Model'}
      </button>
      <button 
        onClick={onCancel}
        disabled={isLoading}
        className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Cancel
      </button>
    </div>
  )

  const renderEditForm = ({ item, onSubmit, onCancel, isLoading }: {
    item: Model
    onSubmit: (data: Partial<Model>) => void
    onCancel: () => void
    isLoading: boolean
  }) => (
    <div className="space-y-4">
      <p>Custom model edit form will be implemented here.</p>
      <button 
        onClick={() => onSubmit(item)}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Updating...' : 'Update Custom Model'}
      </button>
      <button 
        onClick={onCancel}
        disabled={isLoading}
        className="ml-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Cancel
      </button>
    </div>
  )

  const handleAdd = async (data: Partial<Model>) => {
    await createModel(data)
  }

  const handleEdit = async (id: string, data: Partial<Model>) => {
    await updateModel(id, data)
  }

  const handleDelete = async (id: string) => {
    await deleteModel(id)
  }

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <BaseTab
      ref={ref}
      items={models}
      filterModels={filterModels}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'type', label: 'Type' },
        { key: 'description', label: 'Description' },
        { key: 'createdAt', label: 'Created At' }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      addButtonText="Add Custom Model"
      renderAddForm={renderAddForm}
      renderEditForm={renderEditForm}
      isLoading={loading}
      hideAddButton={true}
    />
  )
})
