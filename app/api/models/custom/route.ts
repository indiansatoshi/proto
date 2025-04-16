import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { paths } from '@/types/openapi'

// OpenAPI types
type CustomModelListResponse = paths['/models/custom']['get']['responses']['200']['content']['application/json']
type CustomModelCreate = paths['/models/custom']['post']['requestBody']['content']['application/json']
type CustomModelResponse = paths['/models/custom']['post']['responses']['201']['content']['application/json']

const CustomModelListSchema = z.array(z.object({
  // Define fields as per your OpenAPI spec for custom model list
}))

export const CustomModelCreateSchema = z.object({
  name: z.string(),
  type: z.enum(['embedding', 'llm']),
  architecture: z.string(),
  parameters: z.record(z.any()).optional(),
  initial_weights: z.string().optional()
})

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
    return NextResponse.json(models)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch custom models' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsed = CustomModelCreateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  // const model = await prisma.model.create({ data: parsed.data })
  // return NextResponse.json({ data: model })
  return NextResponse.json({ message: 'POST not implemented in this route' }, { status: 501 })
}