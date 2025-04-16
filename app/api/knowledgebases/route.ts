import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { paths } from '@/types/openapi'

// OpenAPI types
// Corrected: Use '/knowledge-bases' (with dash), not '/knowledgebases'
type KnowledgeBaseCreate = paths['/knowledge-bases']['post']['requestBody']['content']['application/json']
type KnowledgeBaseResponse = paths['/knowledge-bases']['post']['responses']['201']['content']['application/json']

// Zod schema based on OpenAPI spec
const KnowledgeBaseCreateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  type: z.string(),
  source: z.string(),
  metadata: z.record(z.any()).optional(),
})

const KnowledgeBaseUpdateSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  source: z.string().optional(),
  metadata: z.object({}).optional(),
})

export async function GET() {
  try {
    const knowledgeBases = await prisma.knowledgeBase.findMany()
    return NextResponse.json({ data: knowledgeBases })
  } catch (error) {
    console.error('Error fetching knowledge bases:', error)
    return NextResponse.json({ error: 'Failed to fetch knowledge bases' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsed = KnowledgeBaseCreateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  try {
    const knowledgeBase = await prisma.knowledgeBase.create({ data: parsed.data })
    return NextResponse.json({ data: knowledgeBase })
  } catch (error) {
    console.error('Error creating knowledge base:', error)
    return NextResponse.json({ error: 'Failed to create knowledge base' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const parsed = KnowledgeBaseUpdateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const { id, ...updateData } = parsed.data
  try {
    const knowledgeBase = await prisma.knowledgeBase.update({ where: { id }, data: updateData })
    return NextResponse.json(knowledgeBase)
  } catch (error) {
    console.error('Error updating knowledge base:', error)
    return NextResponse.json({ error: 'Failed to update knowledge base' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }
  try {
    await prisma.knowledgeBase.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting knowledge base:', error)
    return NextResponse.json({ error: 'Failed to delete knowledge base' }, { status: 500 })
  }
}