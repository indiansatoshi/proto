'use client'

import { useEffect, useState, forwardRef } from 'react'
import { BaseTab, BaseTabRef } from '../ui/base-tab'
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

export const LocalModelsTab = forwardRef<BaseTabRef, LocalModelsTabProps>(({ searchQuery = '' }, ref) => {
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

  const handleCreate = async (data: Partial<LocalModel>) => {
    const { model, error } = await createLocalModel(data as ModelFormData)
    if (error) {
      setError(error)
      return
    }
    if (model) {
      setModels(prev => [model, ...prev])
    }
  }

  const handleUpdate = async (id: string, data: Partial<LocalModel>) => {
    const { model, error } = await updateLocalModel(id, data as ModelFormData)
    if (error) {
      setError(error)
      return
    }
    if (model) {
      setModels(prev => prev.map(m => m.id === id ? model : m))
    }
  }

  const handleDelete = async (id: string) => {
    const { success, error } = await deleteLocalModel(id)
    if (error) {
      setError(error)
      return
    }
    if (success) {
      setModels(prev => prev.filter(m => m.id !== id))
    }
  }

  const filterModels = (models: LocalModel[]) => {
    if (!searchQuery) return models
    return models.filter(model => 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

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
        className="font-sans text-foreground"
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
        className="font-sans text-foreground"
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

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>

  return (
    <BaseTab
      ref={ref}
      items={models}
      filterModels={filterModels}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'type', label: 'Type' },
        { key: 'path', label: 'Path' },
        { key: 'size', label: 'Size' },
        { key: 'lastModified', label: 'Last Modified' }
      ]}
      onAdd={handleCreate}
      onEdit={handleUpdate}
      onDelete={handleDelete}
      addButtonText="Add Local Model"
      renderAddForm={renderAddForm}
      renderEditForm={renderEditForm}
      isLoading={loading}
      hideAddButton={true}
    />
  )
})
