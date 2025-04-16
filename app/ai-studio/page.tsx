'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Search } from '@/components/ui/search'
import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function AIStudioPage() {
  const [tab, setTab] = useState('workflows')
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
              { label: 'AI Studio' }
            ]} 
            className="mb-2"
          />
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">AI Studio</h1>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Create, train, and deploy AI models in a powerful workspace
          </p>
        </div>
        <Search 
          placeholder="Search AI Studio..." 
          className="w-full sm:w-64" 
          onSearch={handleSearch}
        />
      </div>

      <Tabs defaultValue="workflows" onValueChange={setTab} className="space-y-4">
        <div className="border-b">
          <TabsList className="w-auto inline-flex h-10 items-center justify-start rounded-none border-b border-b-transparent p-0">
            <TabsTrigger value="workflows" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Workflows</TabsTrigger>
            <TabsTrigger value="agents" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">Agents</TabsTrigger>
            <TabsTrigger value="mcp" className="text-sm sm:text-base rounded-none px-3 h-10 data-[state=active]:border-b-2">MCP</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="workflows" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Model Creation</CardTitle>
                <CardDescription>Create and customize AI models</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Design and configure your AI models with an intuitive interface.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Training</CardTitle>
                <CardDescription>Train models on your data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Train your models using your datasets with advanced training options.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Deployment</CardTitle>
                <CardDescription>Deploy models to production</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Deploy your trained models with one click to various environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="agents" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Agent Creation</CardTitle>
                <CardDescription>Create intelligent AI agents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Design and configure AI agents with specific capabilities and behaviors.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Agent Training</CardTitle>
                <CardDescription>Train agents for specific tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Train your agents to perform specific tasks using reinforcement learning.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">Agent Deployment</CardTitle>
                <CardDescription>Deploy agents to production</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Deploy your trained agents to various environments and platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="mcp" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">MCP Configuration</CardTitle>
                <CardDescription>Configure MCP settings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Configure and customize your MCP settings for optimal performance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">MCP Monitoring</CardTitle>
                <CardDescription>Monitor MCP performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Monitor and analyze MCP performance metrics in real-time.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">MCP Integration</CardTitle>
                <CardDescription>Integrate MCP with other systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-6">
                  Integrate MCP with other systems and platforms for seamless operation.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 