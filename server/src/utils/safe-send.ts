/* eslint-disable no-console */
import { WebSocket } from 'ws'

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

export { safeSend }
