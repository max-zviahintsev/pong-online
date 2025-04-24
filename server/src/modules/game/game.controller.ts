import { v4 as uuidv4 } from 'uuid'
import { WebSocket } from 'ws'
import { broadcastStartGame, broadcastPaddlePosition } from '../../utils/send.ts'
import { Clients } from './types.ts'

const clients: Clients = new Map()

const handleGameRoute = (socket: WebSocket) => {
  const clientId = uuidv4()

  clients.set(clientId, socket)
  console.log(`Client connected: ${clientId}`)

  if (clients.size > 1) {
    broadcastStartGame(clients)
  }

  socket.on('message', (data) => {
    const parsed = JSON.parse(data.toString())

    if (parsed?.type === 'paddle_position') {
      broadcastPaddlePosition(clientId, clients, parsed)
    }
  })

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
