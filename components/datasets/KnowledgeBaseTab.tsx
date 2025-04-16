'use client'

import { useEffect, useCallback, useRef, forwardRef } from 'react'
import { BaseTab, BaseTabRef } from '../ui/base-tab'
import { useCrud } from '@/lib/hooks/use-crud'
import { KnowledgeBase } from '@/types/models'

interface KnowledgeBaseTabProps {
  searchQuery?: string
}

export const KnowledgeBaseTab = forwardRef<BaseTabRef, KnowledgeBaseTabProps>(({ searchQuery = '' }, ref) => {
  // Use a ref to store the error handler to prevent dependency changes
  const handleErrorRef = useRef((error: any) => {
    console.error('Error:', error)
  })

  const {
    items: knowledgeBases = [],
    loading,
    error,
    fetchItems: fetchKnowledgeBases,
    createItem: createKnowledgeBase,
    updateItem: updateKnowledgeBase,
    deleteItem: deleteKnowledgeBase
  } = useCrud<KnowledgeBase>({
    baseUrl: '/api/knowledge-bases',
    onError: handleErrorRef.current
  })

  // Use a ref to track if the component is mounted
  const isMountedRef = useRef(false)

  useEffect(() => {
    isMountedRef.current = true
    fetchKnowledgeBases()
    
    return () => {
      isMountedRef.current = false
    }
  }, [fetchKnowledgeBases])

  const filterKnowledgeBases = (knowledgeBases: KnowledgeBase[]) => {
    if (!searchQuery) return knowledgeBases
    return knowledgeBases.filter(kb => 
      kb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      kb.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      kb.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const handleAdd = useCallback(() => {
    return createKnowledgeBase({ 
      name: 'New Knowledge Base', 
      description: 'Knowledge base description',
      type: 'text'
    })
  }, [createKnowledgeBase])

  const handleEdit = useCallback((knowledgeBase: KnowledgeBase) => {
    updateKnowledgeBase(knowledgeBase.id, knowledgeBase)
  }, [updateKnowledgeBase])

  const handleDelete = useCallback((id: string) => {
    deleteKnowledgeBase(id)
  }, [deleteKnowledgeBase])

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>

  return (
    <BaseTab
      ref={ref}
      items={knowledgeBases}
      filterModels={filterKnowledgeBases}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
        { key: 'type', label: 'Type' },
        { key: 'createdAt', label: 'Created At' }
      ]}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      addButtonText="Add Knowledge Base"
      isLoading={loading}
      hideAddButton={true}
      pageSize={7}
    />
  )
})
