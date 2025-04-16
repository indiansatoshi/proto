// @ts-ignore
import type { paths } from './openapi.d'

export type Model = paths['/models']['get']['responses']['200']['content']['application/json']['data'][number]
export type Dataset = paths['/datasets']['get']['responses']['200']['content']['application/json']['data'][number]
export type File = paths['/files']['get']['responses']['200']['content']['application/json']['data'][number]
export type KnowledgeBase = paths['/knowledge-bases']['get']['responses']['200']['content']['application/json']['data'][number]

export interface BaseEntity {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    total: number
    pages: number
    page: number
    limit: number
  }
} 