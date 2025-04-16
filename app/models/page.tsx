'use client'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { LocalModelsTab } from '../../components/models/LocalModelsTab'
import { ProviderModelsTab } from '../../components/models/ProviderModelsTab'
import { CustomModelsTab } from '../../components/models/CustomModelsTab'
import { useState, useRef } from 'react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Search } from '@/components/ui/search'
import { Button } from '@/components/ui/button'
import { BaseTabRef } from '@/components/ui/base-tab'
import { Tooltip } from '@/components/ui/tooltip'

export default function ModelsPage() {
  const [tab, setTab] = useState('local')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Create refs for each tab to access their methods
  const localModelsTabRef = useRef<BaseTabRef>(null)
  const providerModelsTabRef = useRef<BaseTabRef>(null)
  const customModelsTabRef = useRef<BaseTabRef>(null)

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    // Implement search functionality here
  }

  // Function to open the add dialog for the current tab
  const handleAdd = () => {
    if (tab === 'local' && localModelsTabRef.current) {
      localModelsTabRef.current.openAddDialog()
    } else if (tab === 'provider' && providerModelsTabRef.current) {
      providerModelsTabRef.current.openAddDialog()
    } else if (tab === 'custom' && customModelsTabRef.current) {
      customModelsTabRef.current.openAddDialog()
    }
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
          <Tooltip content="Manage your local, provider, and custom models">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight cursor-help">Models</h1>
          </Tooltip>
        </div>
        <Search 
          placeholder="Search models..." 
          className="w-full sm:w-64" 
          onSearch={handleSearch}
        />
      </div>

      <Tabs defaultValue="local" onValueChange={setTab}>
        <div className="border-b flex justify-between items-center">
          <TabsList className="w-auto inline-flex h-10 items-center justify-start rounded-none border-b border-b-transparent p-0">
            <TabsTrigger value="local" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Local</TabsTrigger>
            <TabsTrigger value="provider" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Provider</TabsTrigger>
            <TabsTrigger value="custom" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Custom</TabsTrigger>
          </TabsList>
          <Button onClick={handleAdd} className="ml-4">
            {tab === 'local' ? 'Add Local Model' : tab === 'provider' ? 'Add Provider Model' : 'Add Custom Model'}
          </Button>
        </div>
        <TabsContent value="local">
          <LocalModelsTab searchQuery={searchQuery} ref={localModelsTabRef} />
        </TabsContent>
        <TabsContent value="provider">
          <ProviderModelsTab searchQuery={searchQuery} ref={providerModelsTabRef} />
        </TabsContent>
        <TabsContent value="custom">
          <CustomModelsTab searchQuery={searchQuery} ref={customModelsTabRef} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
