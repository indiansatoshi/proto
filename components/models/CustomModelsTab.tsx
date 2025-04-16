'use client'

import { useEffect } from 'react'
import { BaseTab } from '../ui/base-tab'
import { useCrud } from '@/lib/hooks/use-crud'
import { Model } from '@/types/models'

interface CustomModelsTabProps {
  searchQuery?: string
}

export function CustomModelsTab({ searchQuery = '' }: CustomModelsTabProps) {
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

  const renderModel = (model: Model) => (
    <div className="flex flex-col gap-1">
      <h3 className="font-semibold">{model.name}</h3>
      <p className="text-sm text-gray-500">Type: {model.type}</p>
      <p className="text-sm text-gray-500">Provider: {model.provider}</p>
      <p className="text-sm text-gray-500">Architecture: {model.architecture}</p>
    </div>
  )

  const handleEdit = (model: Model) => {
    updateModel(model.id, model)
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

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <BaseTab<Model>
      endpoint="/api/models/custom"
      filterModels={filterModels}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'type', label: 'Type' },
        { key: 'description', label: 'Description' },
        { key: 'createdAt', label: 'Created At' }
      ]}
      onAdd={() => {
        // This is a placeholder function that will be replaced by the renderAddForm
        console.log('Add button clicked')
      }}
      onEdit={handleEdit}
      onDelete={deleteModel}
      renderItem={renderModel}
      addButtonText="Add Custom Model"
      renderAddForm={renderAddForm}
      renderEditForm={renderEditForm}
      isLoading={loading}
    />
  )
}
