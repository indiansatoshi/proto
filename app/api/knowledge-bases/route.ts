import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { paths } from '@/types/openapi'

// OpenAPI types
// Corrected: Remove '/api/' prefix for OpenAPI paths
type KnowledgeBaseCreate = paths['/knowledge-bases']['post']['requestBody']['content']['application/json']
type KnowledgeBaseResponse = paths['/knowledge-bases']['post']['responses']['201']['content']['application/json']

// Zod schema based on OpenAPI spec
const KnowledgeBaseCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  datasetIds: z.array(z.string())
})

const KnowledgeBaseUpdateSchema = z.object({
  id: z.string(),
  // Add other fields as per OpenAPI spec
})

export async function GET() {
  const knowledgeBases = await prisma.knowledgeBase.findMany({ orderBy: { updatedAt: 'desc' } })
  return NextResponse.json(knowledgeBases)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsed = KnowledgeBaseCreateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const knowledgeBase = await prisma.knowledgeBase.create({ data: parsed.data })
  return NextResponse.json({ data: knowledgeBase })
}

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const parsed = KnowledgeBaseUpdateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const { id, ...updateData } = parsed.data
  const knowledgeBase = await prisma.knowledgeBase.update({ where: { id }, data: updateData })
  return NextResponse.json(knowledgeBase)
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }
  await prisma.knowledgeBase.delete({ where: { id } })
  return NextResponse.json({ success: true })
}