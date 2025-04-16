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
    const model = await prisma.model.update({
      where: { 
        id: params.id,
        provider: 'custom'
      },
      data
    })
    return NextResponse.json({ data: model })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Custom model not found' }, { status: 404 })
    }
    console.error('Error updating custom model:', error)
    return NextResponse.json({ error: 'Failed to update custom model' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.model.delete({
      where: { 
        id: params.id,
        provider: 'custom'
      }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Custom model not found' }, { status: 404 })
    }
    console.error('Error deleting custom model:', error)
    return NextResponse.json({ error: 'Failed to delete custom model' }, { status: 500 })
  }
} 