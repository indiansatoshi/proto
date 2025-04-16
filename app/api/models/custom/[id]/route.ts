import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

// OpenAPI types
// Corrected: Use '/models/custom' POST for create, but for update, this is not in OpenAPI
type CustomModelUpdate = {
  name?: string;
  type?: 'embedding' | 'llm';
  architecture?: string;
  parameters?: Record<string, any>;
  initial_weights?: string;
};

// Zod schema based on OpenAPI spec
export const CustomModelUpdateSchema = z.object({
  name: z.string().optional(),
  type: z.enum(['embedding', 'llm']).optional(),
  architecture: z.string().optional(),
  parameters: z.record(z.any()).optional(),
  initial_weights: z.string().optional()
});

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const parsed = CustomModelUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }
  const data = parsed.data;
  const model = await prisma.model.update({
    where: { 
      id: params.id,
      provider: 'custom'
    },
    data
  });
  return NextResponse.json({ data: model });
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
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting custom model:', error);
    return NextResponse.json({ error: 'Failed to delete custom model' }, { status: 500 });
  }
}