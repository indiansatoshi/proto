'use client'

import { useEffect, useCallback, useRef } from 'react'
import { BaseTab } from '../ui/base-tab'
import { useCrud } from '@/lib/hooks/use-crud'
import { File } from '@/types/models'

interface FilesTabProps {
  searchQuery?: string
}

export function FilesTab({ searchQuery = '' }: FilesTabProps) {
  // Use a ref to store the error handler to prevent dependency changes
  const handleErrorRef = useRef((error: any) => {
    console.error('Error:', error)
  })

  const {
    items: files = [],
    loading,
    error,
    fetchItems: fetchFiles,
    createItem: createFile,
    updateItem: updateFile,
    deleteItem: deleteFile
  } = useCrud<File>({
    baseUrl: '/api/files',
    onError: handleErrorRef.current
  })

  // Use a ref to track if the component is mounted
  const isMountedRef = useRef(false)

  useEffect(() => {
    isMountedRef.current = true
    fetchFiles()
    
    return () => {
      isMountedRef.current = false
    }
  }, [fetchFiles])

  const filterFiles = (files: File[]) => {
    if (!searchQuery) return files
    return files.filter(file => 
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const renderFile = useCallback((file: File) => (
    <div className="flex flex-col gap-1">
      <h3 className="font-semibold">{file.name}</h3>
      <p className="text-sm text-gray-500">Type: {file.type}</p>
      <p className="text-sm text-gray-500">Size: {file.size} bytes</p>
      <p className="text-sm text-gray-500">Created: {new Date(file.createdAt).toLocaleDateString()}</p>
    </div>
  ), [])

  const handleAdd = useCallback(() => {
    return createFile({ 
      name: 'New File', 
      type: 'text/plain',
      size: 0
    })
  }, [createFile])

  const handleEdit = useCallback((file: File) => {
    updateFile(file.id, file)
  }, [updateFile])

  const handleDelete = useCallback((file: File) => {
    deleteFile(file.id)
  }, [deleteFile])

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <BaseTab<File>
      endpoint="/api/files"
      filterModels={filterFiles}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'type', label: 'Type' },
        { key: 'size', label: 'Size' },
        { key: 'createdAt', label: 'Created At' }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      renderItem={renderFile}
      addButtonText="Upload File"
      isLoading={loading}
    />
  )
}
