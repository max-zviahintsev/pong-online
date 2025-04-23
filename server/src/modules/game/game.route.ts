import { FastifyInstance } from 'fastify'
import { handleGameRoute } from './game.controller.ts'

async function gameRoute(app: FastifyInstance) {
  app.get('/', { websocket: true }, handleGameRoute)
}

export { gameRoute }
