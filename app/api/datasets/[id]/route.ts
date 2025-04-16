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
    const dataset = await prisma.dataset.update({
      where: { id: params.id },
      data
    })
    return NextResponse.json({ data: dataset })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Dataset not found' }, { status: 404 })
    }
    console.error('Error updating dataset:', error)
    return NextResponse.json({ error: 'Failed to update dataset' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.dataset.delete({
      where: { id: params.id }
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Dataset not found' }, { status: 404 })
    }
    console.error('Error deleting dataset:', error)
    return NextResponse.json({ error: 'Failed to delete dataset' }, { status: 500 })
  }
} 