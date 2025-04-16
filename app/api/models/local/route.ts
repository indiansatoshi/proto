import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { z } from 'zod'
import type { paths } from '@/types/openapi'

// Create a new PrismaClient instance for this route
const prisma = new PrismaClient()

// OpenAPI types
// POST (pull local model)
type LocalModelPull = paths['/models/local']['post']['requestBody']['content']['application/json'];

// Zod schema based on OpenAPI spec
export const LocalModelPullSchema = z.object({
  model: z.string(),
  tag: z.string().optional()
})

export async function GET() {
  try {
    const models = await prisma.model.findMany({
      where: {
        provider: 'local'
      }
    })
    return NextResponse.json(models)
  } catch (error) {
    console.error('Error fetching local models:', error)
    return NextResponse.json({ error: 'Failed to fetch models' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = LocalModelPullSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error }, { status: 400 })
    }
    const data = parsed.data
    const newModel = await prisma.model.create({
      data: {
        ...data,
        provider: 'local'
      }
    })
    return NextResponse.json(newModel)
  } catch (error) {
    console.error('Error creating local model:', error)
    return NextResponse.json({ error: 'Failed to create model' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data
    
    const updatedModel = await prisma.model.update({
      where: { id },
      data: updateData
    })
    
    return NextResponse.json(updatedModel)
  } catch (error) {
    console.error('Error updating local model:', error)
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

    await prisma.model.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting local model:', error)
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
      return NextResponse.json({ error: 'Model not found' }, { status: 404 })
    }
    return NextResponse.json({ error: 'Failed to delete model' }, { status: 500 })
  }
} 