import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'
import type { paths } from '@/types/openapi'

// OpenAPI types
// Corrected: Remove '/api/' prefix for OpenAPI paths
type FileCreate = paths['/files']['post']['requestBody']['content']['application/json']
type FileResponse = paths['/files']['post']['responses']['201']['content']['application/json']

// POST (upload file)
type FileUpload = paths['/files']['post']['requestBody']['content']['multipart/form-data'];

// Zod schema based on OpenAPI spec
const FileCreateSchema = z.object({
  // Define fields as per your OpenAPI spec for file creation
})

const FileUpdateSchema = z.object({
  id: z.string(),
  // Add other fields as per OpenAPI spec
})

export const FileUploadSchema = z.object({
  file: z.instanceof(Blob), // or z.any() if using FormData
  metadata: z.record(z.any()).optional()
})

export async function GET() {
  const files = await prisma.file.findMany({ orderBy: { updatedAt: 'desc' } })
  return NextResponse.json(files)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const parsed = FileCreateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const file = await prisma.file.create({ data: parsed.data })
  return NextResponse.json(file)
}

export async function PUT(request: NextRequest) {
  const body = await request.json()
  const parsed = FileUpdateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 })
  }
  const { id, ...updateData } = parsed.data
  const file = await prisma.file.update({ where: { id }, data: updateData })
  return NextResponse.json(file)
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 })
  }
  await prisma.file.delete({ where: { id } })
  return NextResponse.json({ success: true })
}