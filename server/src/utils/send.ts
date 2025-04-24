/* eslint-disable no-console */
import { WebSocket } from 'ws'
import { Clients, PaddlePositionMessage, StartGameMessage } from '../modules/game/types.ts'
function safeSend(socket: WebSocket, data: string | Buffer | ArrayBuffer) {
  try {
    if (socket.readyState === socket.OPEN) {
      socket.send(data)
    } else {
      console.warn('Tried sending to closed connection')
    }
  } catch (error) {
    console.error('Send error:', error)
    socket.terminate()
  }
}

function broadcastStartGame(clients: Clients) {
  for (const [id, client] of clients) {
    const message: StartGameMessage = {
      type: 'game_start',
      payload: {
        isGameStarted: true,
        clientId: id,
      },
    }
    safeSend(client, JSON.stringify(message))
  }
}

function broadcastPaddlePosition(clientId: string, clients: Clients, data: PaddlePositionMessage) {
  const { x } = data.payload

  for (const [id, client] of clients) {
    if (id !== clientId) {
      safeSend(
        client,
        JSON.stringify({
          type: 'top_paddle_position',
          payload: { x },
        }),
      )
    }
  }
}

export { safeSend, broadcastStartGame, broadcastPaddlePosition }
