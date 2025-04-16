  import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { paths } from '@/types/openapi'

// OpenAPI types
// Corrected: Remove '/api/' prefix for OpenAPI paths
type DatasetUpdate = paths['/datasets/{id}']['put']['requestBody']['content']['application/json']
type DatasetResponse = paths['/datasets/{id}']['put']['responses']['200']['content']['application/json']

// Zod schema based on OpenAPI spec
const DatasetUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  fileIds: z.array(z.string()).optional()
})

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json()
  const parsed = DatasetUpdateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const dataset = await prisma.dataset.update({ where: { id: params.id }, data: parsed.data })
  return NextResponse.json({ data: dataset })
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.dataset.delete({ where: { id: params.id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting dataset:', error)
    return NextResponse.json({ error: 'Failed to delete dataset' }, { status: 500 })
  }
}