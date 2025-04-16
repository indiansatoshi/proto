import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json()
    const knowledgeBase = await prisma.knowledgeBase.update({
      where: { id: params.id },
      data
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