import { useEffect, useRef } from 'react'
import { useSetPaddleBottomX, useSetPlayerMoved, useWebSocket } from '../store/hooks'
import {
  CANVAS_WIDTH,
  PADDLE_WIDTH,
  PADDLE_CENTER,
  THROTTLE_INTERVAL_MS,
  MIN_PIXEL_DELTA,
} from '../shared/constants'

function useCursorPosition() {
  const setPaddleBottomX = useSetPaddleBottomX()
  const setPlayerMovedAtom = useSetPlayerMoved()
  const webSocket = useWebSocket()

  const lastSentTimeRef = useRef(0)
  const lastSentXRef = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = document.getElementById('game-canvas')
      if (!canvas) return

      const bounds = canvas.getBoundingClientRect()
      const relativeX = event.clientX - bounds.left

      let paddlePosition = relativeX - PADDLE_CENTER

      paddlePosition = Math.max(0, Math.min(paddlePosition, CANVAS_WIDTH - PADDLE_WIDTH))

      setPaddleBottomX(paddlePosition)

      const now = Date.now()
      const lastSentX = lastSentXRef.current
      const lastSentTime = lastSentTimeRef.current

      const hasMovedEnough =
        lastSentX === null || Math.abs(paddlePosition - lastSentX) >= MIN_PIXEL_DELTA
      const isThrottled = now - lastSentTime < THROTTLE_INTERVAL_MS

      if (hasMovedEnough && !isThrottled && webSocket?.readyState === WebSocket.OPEN) {
        lastSentXRef.current = paddlePosition
        lastSentTimeRef.current = now

        webSocket.send(
          JSON.stringify({
            type: 'paddle_position',
            payload: {
              x: paddlePosition,
            },
          }),
        )
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    setPlayerMovedAtom(true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [setPaddleBottomX, setPlayerMovedAtom, webSocket])
}

export default useCursorPosition
