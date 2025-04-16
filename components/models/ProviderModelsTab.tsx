'use client'

import { useEffect, forwardRef } from 'react'
import { BaseTab, BaseTabRef } from '../ui/base-tab'
import { useCrud } from '@/lib/hooks/use-crud'
import { Model } from '@/types/models'
import { Form } from '../ui/form'
import { FormField } from '../ui/form-field'

interface ProviderModelsTabProps {
  searchQuery?: string
}

export const ProviderModelsTab = forwardRef<BaseTabRef, ProviderModelsTabProps>(({ searchQuery = '' }, ref) => {
  const {
    items: models,
    loading,
    error,
    fetchItems: fetchModels,
    createItem: createModel,
    updateItem: updateModel,
    deleteItem: deleteModel
  } = useCrud<Model>({
    baseUrl: '/api/models/provider',
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
      model.provider?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const renderAddForm = ({ onSubmit, onCancel, isLoading }: {
    onSubmit: (data: Partial<Model>) => void
    onCancel: () => void
    isLoading: boolean
  }) => (
    <Form
      title="Add Provider Model"
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
          name: formData.get('name') as string,
          type: formData.get('type') as 'llm' | 'embedding',
          provider: formData.get('provider') as string,
          modelId: formData.get('modelId') as string,
          apiKey: formData.get('apiKey') as string
        }
        onSubmit(data)
      }}
      onCancel={onCancel}
      isLoading={isLoading}
    >
      <div className="space-y-4">
        <FormField
          name="name"
          label="Name"
          placeholder="e.g., GPT-4"
          required
        />
        <div className="space-y-2">
          <label className="text-sm font-medium">Type</label>
          <select
            name="type"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue="llm"
            required
          >
            <option value="llm">LLM</option>
            <option value="embedding">Embedding</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Provider</label>
          <select
            name="provider"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue="openai"
            required
          >
            <option value="openai">OpenAI</option>
            <option value="anthropic">Anthropic</option>
            <option value="google">Google</option>
          </select>
        </div>
        <FormField
          name="modelId"
          label="Model ID"
          placeholder="e.g., gpt-4-turbo-preview"
          required
        />
        <FormField
          name="apiKey"
          label="API Key"
          type="password"
          placeholder="Enter your API key"
          required
        />
      </div>
    </Form>
  )

  const renderEditForm = ({ item, onSubmit, onCancel, isLoading }: {
    item: Model
    onSubmit: (data: Partial<Model>) => void
    onCancel: () => void
    isLoading: boolean
  }) => (
    <Form
      title="Edit Provider Model"
      onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
          name: formData.get('name') as string,
          type: formData.get('type') as 'llm' | 'embedding',
          provider: formData.get('provider') as string,
          modelId: formData.get('modelId') as string,
          apiKey: formData.get('apiKey') as string
        }
        onSubmit(data)
      }}
      onCancel={onCancel}
      isLoading={isLoading}
    >
      <div className="space-y-4">
        <FormField
          name="name"
          label="Name"
          placeholder="e.g., GPT-4"
          defaultValue={item.name}
          required
        />
        <div className="space-y-2">
          <label className="text-sm font-medium">Type</label>
          <select
            name="type"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={item.type}
            required
          >
            <option value="llm">LLM</option>
            <option value="embedding">Embedding</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Provider</label>
          <select
            name="provider"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            defaultValue={item.provider}
            required
          >
            <option value="openai">OpenAI</option>
            <option value="anthropic">Anthropic</option>
            <option value="google">Google</option>
          </select>
        </div>
        <FormField
          name="modelId"
          label="Model ID"
          placeholder="e.g., gpt-4-turbo-preview"
          defaultValue={item.modelId || ''}
          required
        />
        <FormField
          name="apiKey"
          label="API Key"
          type="password"
          placeholder="Enter your API key"
          defaultValue={item.apiKey || ''}
          required
        />
      </div>
    </Form>
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
        { key: 'provider', label: 'Provider' },
        { key: 'modelId', label: 'Model ID' },
        { key: 'createdAt', label: 'Created At' }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      addButtonText="Add Provider Model"
      renderAddForm={renderAddForm}
      renderEditForm={renderEditForm}
      isLoading={loading}
      hideAddButton={true}
    />
  )
})
