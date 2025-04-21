import { fastify, FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'node:http'

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
})

app.get('/ping', async () => 'pong\n')

export default app
