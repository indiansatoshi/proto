'use client'

import { useEffect, useCallback, useRef } from 'react'
import { BaseTab } from '../ui/base-tab'
import { useCrud } from '@/lib/hooks/use-crud'
import { Dataset } from '@/types/models'

interface DatasetsTabProps {
  searchQuery?: string
}

export function DatasetsTab({ searchQuery = '' }: DatasetsTabProps) {
  // Use a ref to store the error handler to prevent dependency changes
  const handleErrorRef = useRef((error: any) => {
    console.error('Error:', error)
  })

  const {
    items: datasets = [],
    loading,
    error,
    fetchItems: fetchDatasets,
    createItem: createDataset,
    updateItem: updateDataset,
    deleteItem: deleteDataset
  } = useCrud<Dataset>({
    baseUrl: '/api/datasets',
    onError: handleErrorRef.current
  })

  // Use a ref to track if the component is mounted
  const isMountedRef = useRef(false)

  useEffect(() => {
    isMountedRef.current = true
    fetchDatasets()
    
    return () => {
      isMountedRef.current = false
    }
  }, [fetchDatasets])

  const filterDatasets = (datasets: Dataset[]) => {
    if (!searchQuery) return datasets
    return datasets.filter(dataset => 
      dataset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataset.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dataset.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const renderDataset = useCallback((dataset: Dataset) => (
    <div className="flex flex-col gap-1">
      <h3 className="font-semibold">{dataset.name}</h3>
      <p className="text-sm text-gray-500">Description: {dataset.description}</p>
      <p className="text-sm text-gray-500">Created: {new Date(dataset.createdAt).toLocaleDateString()}</p>
    </div>
  ), [])

  const handleAdd = useCallback(() => {
    return createDataset({ 
      name: 'New Dataset', 
      description: 'Dataset description' 
    })
  }, [createDataset])

  const handleEdit = useCallback((dataset: Dataset) => {
    updateDataset(dataset.id, dataset)
  }, [updateDataset])

  const handleDelete = useCallback((dataset: Dataset) => {
    deleteDataset(dataset.id)
  }, [deleteDataset])

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <BaseTab<Dataset>
      endpoint="/api/datasets"
      filterModels={filterDatasets}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
        { key: 'type', label: 'Type' },
        { key: 'createdAt', label: 'Created At' }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      renderItem={renderDataset}
      addButtonText="Add Dataset"
      isLoading={loading}
    />
  )
}
