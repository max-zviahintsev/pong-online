import { fastify, FastifyInstance } from 'fastify'
import websocket from '@fastify/websocket'
import { Server, IncomingMessage, ServerResponse } from 'node:http'
import { wsTestRoute } from './routes/ws-test.route.ts'

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
})

app.register(websocket)

// ROUTES
await app.register(wsTestRoute)

app.get('/ping', async () => 'pong\n')

export default app
