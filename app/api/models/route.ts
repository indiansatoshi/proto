import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { paths } from '@/types/openapi'

// OpenAPI types
// POST
// Corrected: Remove '/api/' prefix for OpenAPI paths
type ModelCreate = paths['/models']['post']['requestBody']['content']['application/json']
type ModelResponse = paths['/models']['post']['responses']['201']['content']['application/json']

// POST (register model)
type ModelRegister = paths['/models/provider']['post']['requestBody']['content']['application/json']

const ModelCreateSchema = z.object({
  // Define fields as per your OpenAPI spec for model creation
})

export const ModelRegisterSchema = z.object({
  name: z.string(),
  type: z.enum(['embedding', 'llm']),
  provider: z.enum(['local', 'openai', 'anthropic', 'custom']),
  source: z.string().optional(),
  parameters: z.record(z.any()).optional()
})

export async function GET() {
  const models = await prisma.model.findMany({ orderBy: { createdAt: 'desc' } })
  return NextResponse.json(models)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsed = ModelCreateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const model = await prisma.model.create({ data: parsed.data })
  return NextResponse.json({ data: model })
}