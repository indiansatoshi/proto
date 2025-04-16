'use client'

import { useEffect, useState } from 'react'
import { BaseTab } from '../ui/base-tab'
import { Model } from '@/types/models'
import { Form } from '../ui/form'
import { FormField } from '../ui/form-field'
import { createLocalModel, deleteLocalModel, getLocalModels, updateLocalModel, type ModelFormData } from '@/app/actions/models'

interface LocalModel {
  id: string
  name: string
  type: string
  path: string
  size: number
  lastModified: string
  provider: string
  source: string
}

interface LocalModelsTabProps {
  searchQuery?: string
}

export function LocalModelsTab({ searchQuery = '' }: LocalModelsTabProps) {
  const [models, setModels] = useState<Model[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchModels()
  }, [])

  const fetchModels = async () => {
    setLoading(true)
    const { models: fetchedModels, error } = await getLocalModels()
    if (error) {
      setError(error)
    } else {
      setModels(fetchedModels)
    }
    setLoading(false)
  }

  const handleCreate = async (data: ModelFormData) => {
    const { model, error } = await createLocalModel(data)
    if (error) {
      setError(error)
      return false
    }
    if (model) {
      setModels(prev => [model, ...prev])
    }
    return true
  }

  const handleUpdate = async (id: string, data: ModelFormData) => {
    const { model, error } = await updateLocalModel(id, data)
    if (error) {
      setError(error)
      return false
    }
    if (model) {
      setModels(prev => prev.map(m => m.id === id ? model : m))
    }
    return true
  }

  const handleDelete = async (id: string) => {
    const { success, error } = await deleteLocalModel(id)
    if (error) {
      setError(error)
      return false
    }
    if (success) {
      setModels(prev => prev.filter(m => m.id !== id))
    }
    return true
  }

  const renderModel = (model: LocalModel) => (
    <div className="flex flex-col gap-1">
      <h3 className="font-semibold">{model.name}</h3>
      <p className="text-sm text-gray-500">Type: {model.type}</p>
      <p className="text-sm text-gray-500">Provider: {model.provider}</p>
      <p className="text-sm text-gray-500">Path: {model.source}</p>
    </div>
  )

  const renderAddForm = ({ onSubmit, onCancel, isLoading }: {
    onSubmit: (data: Partial<LocalModel>) => void
    onCancel: () => void
    isLoading: boolean
  }) => {
    return (
      <Form
        title="Add Local Model"
        onSubmit={async (e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const model = {
            name: formData.get('name') as string,
            type: formData.get('type') as string,
            path: formData.get('path') as string,
            size: parseInt(formData.get('size') as string),
            lastModified: new Date().toISOString(),
            provider: 'local',
            source: formData.get('path') as string
          }
          onSubmit(model)
        }}
        onCancel={onCancel}
        isLoading={isLoading}
      >
        <FormField
          name="name"
          label="Name"
          type="text"
          required
        />
        <FormField
          name="type"
          label="Type"
          type="text"
          required
        />
        <FormField
          name="path"
          label="Path"
          type="text"
          required
        />
        <FormField
          name="size"
          label="Size (bytes)"
          type="number"
          required
        />
      </Form>
    )
  }

  const renderEditForm = ({ item, onSubmit, onCancel, isLoading }: {
    item: LocalModel
    onSubmit: (data: Partial<LocalModel>) => void
    onCancel: () => void
    isLoading: boolean
  }) => {
    return (
      <Form
        title="Edit Local Model"
        onSubmit={async (e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const updatedModel = {
            ...item,
            name: formData.get('name') as string,
            type: formData.get('type') as string,
            path: formData.get('path') as string,
            size: parseInt(formData.get('size') as string),
            lastModified: new Date().toISOString(),
            provider: 'local',
            source: formData.get('path') as string
          }
          onSubmit(updatedModel)
        }}
        onCancel={onCancel}
        isLoading={isLoading}
      >
        <FormField
          name="name"
          label="Name"
          type="text"
          defaultValue={item.name}
          required
        />
        <FormField
          name="type"
          label="Type"
          type="text"
          defaultValue={item.type}
          required
        />
        <FormField
          name="path"
          label="Path"
          type="text"
          defaultValue={item.path}
          required
        />
        <FormField
          name="size"
          label="Size (bytes)"
          type="number"
          defaultValue={item.size}
          required
        />
      </Form>
    )
  }

  const filterModels = (models: LocalModel[]) => {
    if (!searchQuery) return models
    return models.filter(model => 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <BaseTab<LocalModel>
      endpoint="/api/models/local"
      filterModels={filterModels}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'type', label: 'Type' },
        { key: 'path', label: 'Path' },
        { key: 'size', label: 'Size' },
        { key: 'lastModified', label: 'Last Modified' }
      ]}
      onAdd={() => {
        // This is a placeholder function that will be replaced by the renderAddForm
        console.log('Add button clicked')
      }}
      onEdit={(item) => handleUpdate(item.id, item as any)}
      onDelete={handleDelete}
      renderItem={renderModel}
      addButtonText="Add Local Model"
      renderAddForm={renderAddForm}
      renderEditForm={renderEditForm}
      isLoading={loading}
    />
  )
}
