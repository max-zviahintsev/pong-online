import { v4 as uuidv4 } from 'uuid'
import { WebSocket } from 'ws'
import { safeSend } from '../../utils/safe-send.ts'

const clients = new Map<string, WebSocket>()

const handleGameRoute = (socket: WebSocket) => {
  const clientId = uuidv4()

  clients.set(clientId, socket)
  console.log(`Client connected: ${clientId}`)

  if (clients.size > 1) {
    const data = JSON.stringify({
      isGameStarted: true,
      clientId,
    })

    safeSend(socket, data)
  }

  socket.on('close', () => {
    console.log(`Client disconnected: ${clientId}`)
    clients.delete(clientId)
    console.log('clientIdsAfterDelete', Array.from(clients.keys()))
  })

  socket.on('error', (error) => {
    console.error(`Error from client ${clientId}:`, error)
  })
}

export { handleGameRoute }
