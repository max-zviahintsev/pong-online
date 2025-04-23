import { useEffect } from 'react'
import { Stage, Layer, Rect, Line } from 'react-konva'
import { useGameLoop } from './hooks/useGameLoop'
import useCursorPosition from './hooks/useCursorPosition'
import { CANVAS_WIDTH, CANVAS_HEIGHT, MIDDLE_LINE, LINE_DASH } from './shared/constants.ts'
import Ball from './components/Ball'
import PaddleTop from './components/PaddleTop'
import PaddleBottom from './components/PaddleBottom'
import ComputerScore from './components/ComputerScore'
import PlayerScore from './components/PlayerScore'
import GameOver from './components/GameOver'
import { useGameOver, useInitWebsocket } from './store/hooks'

function App() {
  useGameLoop()
  useCursorPosition()
  const isGameOver = useGameOver()
  const initWebSocket = useInitWebsocket()

  useEffect(() => {
    initWebSocket()
  }, [initWebSocket])

  if (isGameOver) {
    return <GameOver />
  }

  return (
    <Stage id='game-canvas' width={CANVAS_WIDTH} height={CANVAS_HEIGHT} style={{ cursor: 'none' }}>
      <Layer>
        <Rect
          id='background'
          x={0}
          y={0}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          fill='rgb(26, 24, 24)'
        />
      </Layer>

      <Layer>
        <PaddleTop />

        <ComputerScore />

        <Line points={MIDDLE_LINE} stroke='grey' strokeWidth={2} dash={LINE_DASH} />

        <PlayerScore />

        <PaddleBottom />

        <Ball />
      </Layer>
    </Stage>
  )
}

export default App
