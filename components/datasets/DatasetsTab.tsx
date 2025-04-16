'use client'

import { useEffect, useCallback, useRef, forwardRef } from 'react'
import { BaseTab, BaseTabRef } from '../ui/base-tab'
import { useCrud } from '@/lib/hooks/use-crud'
import { Dataset } from '@/types/models'

interface DatasetsTabProps {
  searchQuery?: string
}

export const DatasetsTab = forwardRef<BaseTabRef, DatasetsTabProps>(({ searchQuery = '' }, ref) => {
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

  const handleAdd = useCallback(() => {
    return createDataset({ 
      name: 'New Dataset', 
      description: 'Dataset description',
      type: 'text',
      format: 'txt',
      size: 0,
      path: '',
      metadata: {}
    })
  }, [createDataset])

  const handleEdit = useCallback((dataset: Dataset) => {
    updateDataset(dataset.id, dataset)
  }, [updateDataset])

  const handleDelete = useCallback((id: string) => {
    deleteDataset(id)
  }, [deleteDataset])

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <BaseTab
      ref={ref}
      items={datasets}
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
      addButtonText="Add Dataset"
      isLoading={loading}
      hideAddButton={true}
    />
  )
})
