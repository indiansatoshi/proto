import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.model.deleteMany()
  await prisma.dataset.deleteMany()
  await prisma.knowledgeBase.deleteMany()
  await prisma.file.deleteMany()

  // Seed Models
  const models = await Promise.all([
    // Local Models
    prisma.model.create({
      data: {
        name: 'Local GPT-3.5',
        type: 'llm',
        provider: 'local',
        source: '/models/gpt-3.5-turbo',
      },
    }),
    prisma.model.create({
      data: {
        name: 'Local Embeddings',
        type: 'embedding',
        provider: 'local',
        source: '/models/all-MiniLM-L6-v2',
      },
    }),
    // Provider Models
    prisma.model.create({
      data: {
        name: 'GPT-4',
        type: 'llm',
        provider: 'openai',
        modelId: 'gpt-4',
        apiKey: process.env.OPENAI_API_KEY || 'sk-demo',
      },
    }),
    prisma.model.create({
      data: {
        name: 'GPT-3.5 Turbo',
        type: 'llm',
        provider: 'openai',
        modelId: 'gpt-3.5-turbo',
        apiKey: process.env.OPENAI_API_KEY || 'sk-demo',
      },
    }),
    // Custom Models
    prisma.model.create({
      data: {
        name: 'Custom Claude',
        type: 'llm',
        provider: 'custom',
        modelId: 'claude-3-opus',
        apiKey: process.env.ANTHROPIC_API_KEY || 'sk-demo',
      },
    }),
  ])

  // Seed Datasets
  const datasets = await Promise.all([
    prisma.dataset.create({
      data: {
        name: 'Sample Text Dataset',
        description: 'A collection of sample text data for testing',
        type: 'text',
        format: 'txt',
        size: 1024,
        path: '/datasets/sample-text',
        metadata: {
          language: 'en',
          source: 'internal',
        },
      },
    }),
    prisma.dataset.create({
      data: {
        name: 'Training Data',
        description: 'Dataset used for model training',
        type: 'text',
        format: 'json',
        size: 2048,
        path: '/datasets/training',
        metadata: {
          language: 'en',
          source: 'external',
        },
      },
    }),
  ])

  // Seed Knowledge Bases
  const knowledgeBases = await Promise.all([
    // Product Documentation
    prisma.knowledgeBase.create({
      data: {
        name: 'Product Documentation',
        description: 'Knowledge base for product documentation',
        type: 'document',
        source: 'internal',
        metadata: {
          category: 'docs',
          version: '1.0',
        },
      },
    }),
    // FAQ Database
    prisma.knowledgeBase.create({
      data: {
        name: 'FAQ Database',
        description: 'Frequently asked questions and answers',
        type: 'faq',
        source: 'support',
        metadata: {
          category: 'support',
          lastUpdated: new Date().toISOString(),
        },
      },
    }),
    // Technical Support
    prisma.knowledgeBase.create({
      data: {
        name: 'Technical Support KB',
        description: 'Technical troubleshooting guides and solutions',
        type: 'technical',
        source: 'support',
        metadata: {
          category: 'technical',
          lastUpdated: new Date().toISOString(),
          priority: 'high',
        },
      },
    }),
    // User Guides
    prisma.knowledgeBase.create({
      data: {
        name: 'User Guides',
        description: 'Step-by-step guides for using our products',
        type: 'guide',
        source: 'internal',
        metadata: {
          category: 'user-guides',
          lastUpdated: new Date().toISOString(),
          audience: 'end-users',
        },
      },
    }),
    // API Documentation
    prisma.knowledgeBase.create({
      data: {
        name: 'API Documentation',
        description: 'Comprehensive API reference and examples',
        type: 'api',
        source: 'developer',
        metadata: {
          category: 'api',
          lastUpdated: new Date().toISOString(),
          audience: 'developers',
          version: '2.1',
        },
      },
    }),
    // Industry Knowledge
    prisma.knowledgeBase.create({
      data: {
        name: 'Industry Knowledge',
        description: 'Domain-specific knowledge for various industries',
        type: 'domain',
        source: 'external',
        metadata: {
          category: 'industry',
          lastUpdated: new Date().toISOString(),
          industries: ['healthcare', 'finance', 'education'],
        },
      },
    }),
    // Compliance Guidelines
    prisma.knowledgeBase.create({
      data: {
        name: 'Compliance Guidelines',
        description: 'Regulatory compliance information and guidelines',
        type: 'compliance',
        source: 'legal',
        metadata: {
          category: 'legal',
          lastUpdated: new Date().toISOString(),
          regulations: ['GDPR', 'CCPA', 'HIPAA'],
        },
      },
    }),
  ])

  // Seed Files
  const files = await Promise.all([
    prisma.file.create({
      data: {
        name: 'sample.txt',
        type: 'text/plain',
        size: 512,
        path: '/files/sample.txt',
        metadata: {
          uploadedBy: 'system',
          purpose: 'testing',
        },
      },
    }),
    prisma.file.create({
      data: {
        name: 'config.json',
        type: 'application/json',
        size: 256,
        path: '/files/config.json',
        metadata: {
          uploadedBy: 'system',
          purpose: 'configuration',
        },
      },
    }),
  ])

  console.log('Seed data created successfully!')
  console.log('Models:', models.length)
  console.log('Datasets:', datasets.length)
  console.log('Knowledge Bases:', knowledgeBases.length)
  console.log('Files:', files.length)
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 