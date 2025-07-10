import { fastifyCors} from '@fastify/cors'
import { fastify } from 'fastify'
import{
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

// http://localhost:3333/health <= URL para Verificação de Funcionamento da Api!
app.get('/health', () => {
  return 'Você pode utilizá-la como base para criar rotas REST com validações seguras, conectar a bancos de dados, integrar com seu front-end (React, Next.js, etc.), ou expandir com autenticação e lógica de negócio.'
})

app.listen({ port: env.PORT })

