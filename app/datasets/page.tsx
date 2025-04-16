'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { FilesTab } from '@/components/datasets/FilesTab'
import { DatasetsTab } from '@/components/datasets/DatasetsTab'
import { KnowledgeBaseTab } from '@/components/datasets/KnowledgeBaseTab'
import { useState, useRef } from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Search } from '@/components/ui/search'
import { Button } from '@/components/ui/button'
import { BaseTabRef } from '@/components/ui/base-tab'
import { Tooltip } from '@/components/ui/tooltip'

export default function DatasetsPage() {
  const [tab, setTab] = useState('files')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Create refs for each tab to access their methods
  const filesTabRef = useRef<BaseTabRef>(null)
  const datasetsTabRef = useRef<BaseTabRef>(null)
  const knowledgeBaseTabRef = useRef<BaseTabRef>(null)

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    // Implement search functionality here
  }

  // Function to open the add dialog for the current tab
  const handleAdd = () => {
    if (tab === 'files' && filesTabRef.current) {
      filesTabRef.current.openAddDialog()
    } else if (tab === 'datasets' && datasetsTabRef.current) {
      datasetsTabRef.current.openAddDialog()
    } else if (tab === 'knowledge-base' && knowledgeBaseTabRef.current) {
      knowledgeBaseTabRef.current.openAddDialog()
    }
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
        <div>
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Datasets' }
            ]} 
            className="mb-2"
          />
          <Tooltip content="Manage your files, datasets, and knowledge bases">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight cursor-help">Datasets</h1>
          </Tooltip>
        </div>
        <Search 
          placeholder="Search datasets..." 
          className="w-full sm:w-64" 
          onSearch={handleSearch}
        />
      </div>

      <Tabs defaultValue="files" onValueChange={setTab}>
        <div className="border-b flex justify-between items-center">
          <TabsList className="w-auto inline-flex h-10 items-center justify-start rounded-none border-b border-b-transparent p-0">
            <TabsTrigger value="files" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Files</TabsTrigger>
            <TabsTrigger value="datasets" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Datasets</TabsTrigger>
            <TabsTrigger value="knowledge-base" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Knowledge Base</TabsTrigger>
          </TabsList>
          <Button onClick={handleAdd} className="ml-4">
            {tab === 'files' ? 'Upload File' : tab === 'datasets' ? 'Add Dataset' : 'Add Knowledge Base'}
          </Button>
        </div>
        <TabsContent value="files">
          <FilesTab searchQuery={searchQuery} ref={filesTabRef} />
        </TabsContent>
        <TabsContent value="datasets">
          <DatasetsTab searchQuery={searchQuery} ref={datasetsTabRef} />
        </TabsContent>
        <TabsContent value="knowledge-base">
          <KnowledgeBaseTab searchQuery={searchQuery} ref={knowledgeBaseTabRef} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
