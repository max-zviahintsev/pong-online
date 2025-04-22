import { useEffect } from 'react'
import { useSetPaddleBottomX, useSetPlayerMoved } from '../store/hooks'
import { CANVAS_WIDTH, PADDLE_WIDTH, PADDLE_CENTER } from '../shared/constants'

function useCursorPosition() {
  const setPaddleBottomX = useSetPaddleBottomX()
  const setPlayerMovedAtom = useSetPlayerMoved()

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const canvas = document.getElementById('game-canvas')
      if (!canvas) return

      const bounds = canvas.getBoundingClientRect()
      const relativeX = event.clientX - bounds.left

      let paddlePosition = relativeX - PADDLE_CENTER

      paddlePosition = Math.max(0, Math.min(paddlePosition, CANVAS_WIDTH - PADDLE_WIDTH))

      setPaddleBottomX(paddlePosition)
    }

    window.addEventListener('mousemove', handleMouseMove)
    setPlayerMovedAtom(true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [setPaddleBottomX, setPlayerMovedAtom])
}

export default useCursorPosition
