import { FastifyInstance } from 'fastify'

async function wsTestRoute(app: FastifyInstance) {
  app.get('/ws-test-route', { websocket: true }, (socket) => {
    socket.send('👋 Hello from Fastify WS!')

    socket.on('message', (message) => {
      console.log(`💬 Message from client:`, message.toString())

      socket.send('hi from server')
    })
  })
}

export { wsTestRoute }
