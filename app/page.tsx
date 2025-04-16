'use client'

import { useEffect, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { Search } from '@/components/ui/search'
import { Tooltip } from '@/components/ui/tooltip'

interface DashboardMetrics {
  files: number
  datasets: number
  knowledgeBases: number
  localModels: number
  providerModels: number
  customModels: number
}

interface ApiError {
  message: string
  endpoint: string
}

export default function HomePage() {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    files: 0,
    datasets: 0,
    knowledgeBases: 0,
    localModels: 0,
    providerModels: 0,
    customModels: 0
  })
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState<ApiError[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const endpoints = [
          { url: '/api/files', key: 'files' },
          { url: '/api/datasets', key: 'datasets' },
          { url: '/api/knowledge-bases', key: 'knowledgeBases' },
          { url: '/api/models/local', key: 'localModels' },
          { url: '/api/models/provider', key: 'providerModels' },
          { url: '/api/models/custom', key: 'customModels' }
        ]

        const results = await Promise.allSettled(
          endpoints.map(async ({ url }) => {
            const response = await fetch(url)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            const contentType = response.headers.get('content-type')
            if (!contentType || !contentType.includes('application/json')) {
              throw new Error('Response was not JSON')
            }
            return response.json()
          })
        )

        const newErrors: ApiError[] = []
        const newMetrics = { ...metrics }

        results.forEach((result, index) => {
          if (result.status === 'rejected') {
            newErrors.push({
              message: result.reason.message,
              endpoint: endpoints[index].url
            })
          } else {
            const data = result.value
            switch (endpoints[index].key) {
              case 'files':
                newMetrics.files = Array.isArray(data) ? data.length : 0
                break
              case 'datasets':
                newMetrics.datasets = Array.isArray(data) ? data.length : 0
                break
              case 'knowledgeBases':
                newMetrics.knowledgeBases = Array.isArray(data) ? data.length : 0
                break
              case 'localModels':
                newMetrics.localModels = Array.isArray(data) ? data.length : 0
                break
              case 'providerModels':
                newMetrics.providerModels = Array.isArray(data) ? data.length : 0
                break
              case 'customModels':
                newMetrics.customModels = Array.isArray(data) ? data.length : 0
                break
            }
          }
        })

        setMetrics(newMetrics)
        setErrors(newErrors)
      } catch (error) {
        console.error('Error fetching metrics:', error)
        setErrors([{ message: 'Failed to fetch metrics', endpoint: 'all' }])
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
  }, [])

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    // Implement search functionality here
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center flex-1 p-4">
        <p className="text-lg">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
        <div>
          <Tooltip content="Overview of your Proto workspace">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight cursor-help">Dashboard</h1>
          </Tooltip>
        </div>
        <Search 
          placeholder="Search dashboard..." 
          className="w-full sm:w-64" 
          onSearch={handleSearch}
        />
      </div>

      {errors.length > 0 && (
        <div className="mb-6 sm:mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h2 className="text-red-800 font-semibold mb-2">Error Loading Data</h2>
          <ul className="text-sm list-disc list-inside text-red-600">
            {errors.map((error, index) => (
              <li key={index}>
                {error.endpoint}: {error.message}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Files</CardTitle>
            <p className="text-2xl sm:text-3xl font-bold">{metrics.files}</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Datasets</CardTitle>
            <p className="text-2xl sm:text-3xl font-bold">{metrics.datasets}</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Knowledge Bases</CardTitle>
            <p className="text-2xl sm:text-3xl font-bold">{metrics.knowledgeBases}</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Local Models</CardTitle>
            <p className="text-2xl sm:text-3xl font-bold">{metrics.localModels}</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Provider Models</CardTitle>
            <p className="text-2xl sm:text-3xl font-bold">{metrics.providerModels}</p>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Custom Models</CardTitle>
            <p className="text-2xl sm:text-3xl font-bold">{metrics.customModels}</p>
          </CardHeader>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                • <a href="/files" className="text-blue-600 hover:underline">Upload your first file</a>
              </li>
              <li>
                • <a href="/datasets" className="text-blue-600 hover:underline">Create a dataset</a>
              </li>
              <li>
                • <a href="/knowledge-bases" className="text-blue-600 hover:underline">Set up a knowledge base</a>
              </li>
              <li>
                • <a href="/models" className="text-blue-600 hover:underline">Configure your models</a>
              </li>
              <li>
                • <a href="https://your-docs-url.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Read the documentation</a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs sm:text-sm text-muted-foreground">No recent activity to display</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
