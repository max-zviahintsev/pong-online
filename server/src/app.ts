import { fastify, FastifyInstance } from 'fastify'
import websocket from '@fastify/websocket'
import { Server, IncomingMessage, ServerResponse } from 'node:http'
import { gameRoute } from './modules/game/game.route.ts'

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
})

await app.register(websocket)

// ROUTES
await app.register(gameRoute)

app.get('/ping', async () => 'pong\n')

export default app
