import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

// Create a new PrismaClient instance for this route
const prisma = new PrismaClient()

export async function GET() {
  try {
    const models = await prisma.model.findMany({
      where: {
        provider: {
          not: 'local'
        }
      }
    })
    return NextResponse.json(models)
  } catch (error) {
    console.error('Error fetching provider models:', error)
    return NextResponse.json({ error: 'Failed to fetch models' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.type || !data.provider || !data.modelId) {
      return NextResponse.json(
        { error: 'Missing required fields: name, type, provider, and modelId are required' },
        { status: 400 }
      )
    }

    // Ensure this is not a local provider
    if (data.provider === 'local') {
      return NextResponse.json(
        { error: 'Use /api/models/local for local models' },
        { status: 400 }
      )
    }

    const newModel = await prisma.model.create({
      data
    })
    return NextResponse.json(newModel)
  } catch (error) {
    console.error('Error creating provider model:', error)
    return NextResponse.json({ error: 'Failed to create model' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    // Ensure the model exists and is a provider model
    const existingModel = await prisma.model.findUnique({
      where: { id }
    })

    if (!existingModel) {
      return NextResponse.json({ error: 'Model not found' }, { status: 404 })
    }

    if (existingModel.provider === 'local') {
      return NextResponse.json(
        { error: 'Use /api/models/local for local models' },
        { status: 400 }
      )
    }

    const updatedModel = await prisma.model.update({
      where: { id },
      data: updateData
    })
    
    return NextResponse.json(updatedModel)
  } catch (error) {
    console.error('Error updating provider model:', error)
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Model not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to update model' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 })
    }

    // Ensure the model exists and is a provider model
    const existingModel = await prisma.model.findUnique({
      where: { id }
    })

    if (!existingModel) {
      return NextResponse.json({ error: 'Model not found' }, { status: 404 })
    }

    if (existingModel.provider === 'local') {
      return NextResponse.json(
        { error: 'Use /api/models/local for local models' },
        { status: 400 }
      )
    }

    await prisma.model.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting provider model:', error)
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Model not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to delete model' }, { status: 500 })
  }
} 