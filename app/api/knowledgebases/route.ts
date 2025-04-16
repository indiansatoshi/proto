import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

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
  try {
    const data = await request.json()
    const knowledgeBase = await prisma.knowledgeBase.create({
      data: {
        name: data.name,
        description: data.description,
        type: data.type,
        source: data.source,
        metadata: data.metadata || {}
      }
    })
    return NextResponse.json({ data: knowledgeBase })
  } catch (error) {
    console.error('Error creating knowledge base:', error)
    return NextResponse.json({ error: 'Failed to create knowledge base' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }
    
    const knowledgeBase = await prisma.knowledgeBase.update({
      where: { id },
      data: updateData
    })
    return NextResponse.json(knowledgeBase)
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Knowledge base not found' }, { status: 404 })
    }
    console.error('Error updating knowledge base:', error)
    return NextResponse.json({ error: 'Failed to update knowledge base' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }
    
    await prisma.knowledgeBase.delete({
      where: { id }
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