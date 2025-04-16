import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function GET() {
  try {
    const models = await prisma.model.findMany({
      where: {
        provider: 'custom'
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json({ data: models })
  } catch (error) {
    console.error('Error fetching custom models:', error)
    return NextResponse.json({ error: 'Failed to fetch custom models' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const model = await prisma.model.create({
      data: {
        name: data.name,
        type: data.type,
        provider: 'custom',
        source: data.source,
        modelId: data.modelId,
        apiKey: data.apiKey
      }
    })
    return NextResponse.json({ data: model })
  } catch (error) {
    console.error('Error creating custom model:', error)
    return NextResponse.json({ error: 'Failed to create custom model' }, { status: 500 })
  }
} 