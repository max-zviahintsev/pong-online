import { atom } from 'jotai'
import { wsAtom, isGameStartedAtom, playerIdAtom, paddleTopXAtom } from '../primitive-atoms'
import { URL } from '../../shared/constants'
import { calculatePosition } from '../../shared/utils'

export const initWebSocketAtom = atom(null, (get, set) => {
  if (get(wsAtom)) return // already connected

  const ws = new WebSocket(URL)

  ws.onopen = () => console.log('[WebSocket] Connected')

  ws.onmessage = (event) => {
    const message = JSON.parse(event.data)
    console.log('[WebSocket] Message received:', message)

    if (message.type === 'game_start') {
      set(isGameStartedAtom, message.payload.isGameStarted)
      set(playerIdAtom, message.payload.clientId)
    }

    if (message.type === 'top_paddle_position') {
      set(paddleTopXAtom, calculatePosition(message.payload.x))
    }
  }

  ws.onclose = () => console.log('[WebSocket] Disconnected')
  ws.onerror = (err) => console.error('[WebSocket] Error', err)

  set(wsAtom, ws)
})
