import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { paths } from '@/types/openapi'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

// OpenAPI types
// PUT (update knowledge base)
type KnowledgeBaseUpdate = paths['/knowledge-bases/{knowledgeBaseId}']['put']['requestBody']['content']['application/json']

// Zod schema based on OpenAPI spec
export const KnowledgeBaseUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  type: z.string().optional(),
  source: z.string().optional(),
  metadata: z.record(z.any()).optional()
})

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const parsed = KnowledgeBaseUpdateSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }
    const knowledgeBase = await prisma.knowledgeBase.update({
      where: { id: params.id },
      data: parsed.data
    })
    return NextResponse.json({ data: knowledgeBase })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Knowledge base not found' }, { status: 404 })
    }
    console.error('Error updating knowledge base:', error)
    return NextResponse.json({ error: 'Failed to update knowledge base' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.knowledgeBase.delete({
      where: { id: params.id }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Knowledge base not found' }, { status: 404 })
    }
    console.error('Error deleting knowledge base:', error)
    return NextResponse.json({ error: 'Failed to delete knowledge base' }, { status: 500 })
  }
}