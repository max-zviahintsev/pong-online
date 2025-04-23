import { useEffect, useRef } from 'react'
import { useGameOver, useTickGame } from '../store/hooks'

export function useGameLoop() {
  const frameRef = useRef<number>(0)
  const tickGame = useTickGame()
  const isGameOver = useGameOver()

  useEffect(() => {
    const animate = () => {
      tickGame()
      frameRef.current = requestAnimationFrame(animate)
    }
    if (isGameOver) {
      cancelAnimationFrame(frameRef.current)
      return
    }
    frameRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameRef.current!)
  }, [tickGame, isGameOver])
}
