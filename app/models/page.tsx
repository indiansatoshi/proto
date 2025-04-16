'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LocalModelsTab } from '../../components/models/LocalModelsTab'
import { ProviderModelsTab } from '../../components/models/ProviderModelsTab'
import { CustomModelsTab } from '../../components/models/CustomModelsTab'
import { useState } from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Search } from '@/components/ui/search'

export default function ModelsPage() {
  const [tab, setTab] = useState('local')
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
              { label: 'Models' }
            ]} 
            className="mb-2"
          />
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">Models</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Manage your local, provider, and custom models
          </p>
        </div>
        <Search 
          placeholder="Search models..." 
          className="w-full sm:w-64" 
          onSearch={handleSearch}
        />
      </div>

      <Tabs defaultValue="local" onValueChange={setTab} className="space-y-4">
        <div className="border-b">
          <TabsList className="w-auto inline-flex h-10 items-center justify-start rounded-none border-b border-b-transparent p-0">
            <TabsTrigger value="local" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Local</TabsTrigger>
            <TabsTrigger value="provider" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Provider</TabsTrigger>
            <TabsTrigger value="custom" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Custom</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="local" className="mt-6">
          <LocalModelsTab searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="provider" className="mt-6">
          <ProviderModelsTab searchQuery={searchQuery} />
        </TabsContent>
        <TabsContent value="custom" className="mt-6">
          <CustomModelsTab searchQuery={searchQuery} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
