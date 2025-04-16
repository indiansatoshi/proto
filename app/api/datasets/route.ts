import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { paths } from '@/types/openapi'

// OpenAPI types
// POST
// Corrected: Remove '/api/' prefix for OpenAPI paths
type DatasetCreate = paths['/datasets']['post']['requestBody']['content']['application/json']
type DatasetResponse = paths['/datasets']['post']['responses']['201']['content']['application/json']

// Zod schemas based on OpenAPI spec
const DatasetCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  fileIds: z.array(z.string())
})

const DatasetUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  fileIds: z.array(z.string()).optional()
})

const DatasetDeleteSchema = z.object({
  id: z.string(),
})

export async function GET() {
  const datasets = await prisma.dataset.findMany({ orderBy: { updatedAt: 'desc' } })
  return NextResponse.json(datasets)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsed = DatasetCreateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const dataset = await prisma.dataset.create({ data: parsed.data })
  return NextResponse.json({ data: dataset })
}

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const parsed = DatasetUpdateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const { id, ...updateData } = parsed.data
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }
  const dataset = await prisma.dataset.update({ where: { id }, data: updateData })
  return NextResponse.json(dataset)
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const parsed = DatasetDeleteSchema.safeParse({ id })
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  await prisma.dataset.delete({ where: { id: parsed.data.id } })
  return NextResponse.json({ success: true })
}