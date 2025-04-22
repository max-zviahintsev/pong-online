import { useEffect, useRef } from 'react'
import { useSetAtom } from 'jotai'
import { tickGameAtom } from '../store/derived-atoms/tick-game-atom'
import { useGameOver } from '../store/hooks'

export function useGameLoop() {
  const frameRef = useRef<number>(0)
  const tickGame = useSetAtom(tickGameAtom)
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
