import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function GET() {
  try {
    const datasets = await prisma.dataset.findMany({
      orderBy: {
        updatedAt: 'desc'
      }
    })
    return NextResponse.json(datasets)
  } catch (error) {
    console.error('Error fetching datasets:', error)
    return NextResponse.json({ error: 'Failed to fetch datasets' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const dataset = await prisma.dataset.create({
      data: {
        name: data.name,
        description: data.description,
        type: data.type,
        format: data.format,
        size: data.size,
        path: data.path,
        metadata: data.metadata || {}
      }
    })
    return NextResponse.json({ data: dataset })
  } catch (error) {
    console.error('Error creating dataset:', error)
    return NextResponse.json({ error: 'Failed to create dataset' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }
    
    const dataset = await prisma.dataset.update({
      where: { id },
      data: updateData
    })
    return NextResponse.json(dataset)
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Dataset not found' }, { status: 404 })
    }
    console.error('Error updating dataset:', error)
    return NextResponse.json({ error: 'Failed to update dataset' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }
    
    await prisma.dataset.delete({
      where: { id }
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