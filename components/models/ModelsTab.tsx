'use client'

import { useEffect, useState } from 'react'
import { BaseTab } from '../ui/base-tab'
import { useCrud } from '@/lib/hooks/use-crud'
import { Model } from '@/types/models'
import { Form } from '../ui/form'
import { FormField } from '../ui/form-field'

export function ModelsTab() {
  const {
    items: models,
    loading,
    error,
    fetchItems: fetchModels,
    createItem: createModel,
    updateItem: updateModel,
    deleteItem: deleteModel
  } = useCrud<Model>({
    baseUrl: '/api/models',
    onError: (error) => {
      console.error('Error:', error)
    }
  })

  useEffect(() => {
    fetchModels()
  }, [fetchModels])

  const renderModel = (model: Model) => (
    <div className="flex flex-col gap-1">
      <h3 className="font-semibold">{model.name}</h3>
      <p className="text-sm text-muted-foreground">Type: {model.type}</p>
      <p className="text-sm text-muted-foreground">Provider: {model.provider}</p>
    </div>
  )

  const handleEdit = (model: Model) => {
    updateModel(model.id, model)
  }

  const renderAddForm = ({ 
    onSubmit, 
    onCancel, 
    isLoading 
  }: { 
    onSubmit: (data: Partial<Model>) => void; 
    onCancel: () => void; 
    isLoading: boolean 
  }) => {
    const [name, setName] = useState('')
    const [type, setType] = useState<'embedding' | 'llm'>('llm')
    const [provider, setProvider] = useState<'local' | 'openai' | 'anthropic' | 'custom'>('local')

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit({
        name,
        type,
        provider
      })
    }

    return (
      <Form
        title="Add New Model"
        onSubmit={handleSubmit}
        onCancel={onCancel}
        isLoading={isLoading}
        className="font-sans text-foreground"
      >
        <FormField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="space-y-2">
          <label className="text-sm font-medium">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as 'embedding' | 'llm')}
            className="flex h-10 w-full rounded-xl border border-border bg-background px-4 py-3 text-base font-sans text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cactus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          >
            <option value="llm">LLM</option>
            <option value="embedding">Embedding</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Provider</label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value as 'local' | 'openai' | 'anthropic' | 'custom')}
            className="flex h-10 w-full rounded-xl border border-border bg-background px-4 py-3 text-base font-sans text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cactus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          >
            <option value="local">Local</option>
            <option value="openai">OpenAI</option>
            <option value="anthropic">Anthropic</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </Form>
    )
  }

  const renderEditForm = ({ 
    item, 
    onSubmit, 
    onCancel, 
    isLoading 
  }: { 
    item: Model; 
    onSubmit: (data: Partial<Model>) => void; 
    onCancel: () => void; 
    isLoading: boolean 
  }) => {
    const [name, setName] = useState(item.name)
    const [type, setType] = useState<'embedding' | 'llm'>(item.type)
    const [provider, setProvider] = useState<'local' | 'openai' | 'anthropic' | 'custom'>(item.provider)

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSubmit({
        name,
        type,
        provider
      })
    }

    return (
      <Form
        title="Edit Model"
        onSubmit={handleSubmit}
        onCancel={onCancel}
        isLoading={isLoading}
        className="font-sans text-foreground"
      >
        <FormField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="space-y-2">
          <label className="text-sm font-medium">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as 'embedding' | 'llm')}
            className="flex h-10 w-full rounded-xl border border-border bg-background px-4 py-3 text-base font-sans text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cactus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          >
            <option value="llm">LLM</option>
            <option value="embedding">Embedding</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Provider</label>
          <select
            value={provider}
            onChange={(e) => setProvider(e.target.value as 'local' | 'openai' | 'anthropic' | 'custom')}
            className="flex h-10 w-full rounded-xl border border-border bg-background px-4 py-3 text-base font-sans text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cactus)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm"
          >
            <option value="local">Local</option>
            <option value="openai">OpenAI</option>
            <option value="anthropic">Anthropic</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </Form>
    )
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <BaseTab
      title="Models"
      items={models}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'type', label: 'Type' },
        { key: 'provider', label: 'Provider' },
        { key: 'description', label: 'Description' },
        { key: 'createdAt', label: 'Created At' }
      ]}
      onAdd={createModel}
      onEdit={handleEdit}
      onDelete={deleteModel}
      addButtonText="Add Model"
      renderAddForm={renderAddForm}
      renderEditForm={renderEditForm}
      isLoading={loading}
      hideAddButton={true}
    />
  )
} 