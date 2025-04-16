'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

// Validation schema for model data
const modelSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  type: z.enum(['llm', 'embedding'], {
    errorMap: () => ({ message: 'Type must be either llm or embedding' })
  }),
  provider: z.enum(['local', 'openai'], {
    errorMap: () => ({ message: 'Provider must be either local or openai' })
  }),
  source: z.string().optional(),
  modelId: z.string().optional(),
  apiKey: z.string().optional()
})

export type ModelFormData = z.infer<typeof modelSchema>

export async function getLocalModels() {
  try {
    const models = await prisma.model.findMany({
      where: {
        provider: 'local'
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return { models, error: null }
  } catch (error) {
    console.error('Error fetching local models:', error)
    return { models: [], error: 'Failed to fetch models' }
  }
}

export async function createLocalModel(data: ModelFormData) {
  try {
    const validatedData = modelSchema.parse({
      ...data,
      provider: 'local'
    })

    const model = await prisma.model.create({
      data: validatedData
    })

    revalidatePath('/models')
    return { model, error: null }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { model: null, error: error.errors[0].message }
    }
    console.error('Error creating local model:', error)
    return { model: null, error: 'Failed to create model' }
  }
}

export async function updateLocalModel(id: string, data: ModelFormData) {
  try {
    const validatedData = modelSchema.parse({
      ...data,
      provider: 'local'
    })

    const model = await prisma.model.update({
      where: { id },
      data: validatedData
    })

    revalidatePath('/models')
    return { model, error: null }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { model: null, error: error.errors[0].message }
    }
    console.error('Error updating local model:', error)
    return { model: null, error: 'Failed to update model' }
  }
}

export async function deleteLocalModel(id: string) {
  try {
    await prisma.model.delete({
      where: { id }
    })

    revalidatePath('/models')
    return { success: true, error: null }
  } catch (error) {
    console.error('Error deleting local model:', error)
    return { success: false, error: 'Failed to delete model' }
  }
} 