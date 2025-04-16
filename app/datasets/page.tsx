'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { FilesTab } from '../../components/datasets/FilesTab'
import { DatasetsTab } from '../../components/datasets/DatasetsTab'
import { KnowledgeBaseTab } from '../../components/datasets/KnowledgeBaseTab'
import { useState } from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Search } from '@/components/ui/search'

export default function DatasetsPage() {
  const [tab, setTab] = useState('files')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    // Implement search functionality here
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
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">Datasets</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Manage your files, datasets, and knowledge bases
          </p>
        </div>
        <Search 
          placeholder="Search datasets..." 
          className="w-full sm:w-64" 
          onSearch={handleSearch}
        />
      </div>

      <Tabs defaultValue="files" onValueChange={setTab} className="space-y-4">
        <div className="border-b">
          <TabsList className="w-auto inline-flex h-10 items-center justify-start rounded-none border-b border-b-transparent p-0">
            <TabsTrigger value="files" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Files</TabsTrigger>
            <TabsTrigger value="datasets" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Datasets</TabsTrigger>
            <TabsTrigger value="knowledge-base" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Knowledge Base</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="files" className="mt-6">
          <FilesTab searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="datasets" className="mt-6">
          <DatasetsTab searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="knowledge-base" className="mt-6">
          <KnowledgeBaseTab searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
