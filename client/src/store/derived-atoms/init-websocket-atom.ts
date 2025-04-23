import { atom } from 'jotai'
import { wsAtom } from '../primitive-atoms'
import { URL } from '../../shared/constants'

export const initWebSocketAtom = atom(null, (get, set) => {
  if (get(wsAtom)) return // already connected

  const ws = new WebSocket(URL)

  ws.onopen = () => console.log('[WebSocket] Connected')
  ws.onclose = () => console.log('[WebSocket] Disconnected')
  ws.onerror = (err) => console.error('[WebSocket] Error', err)

  set(wsAtom, ws)
})
