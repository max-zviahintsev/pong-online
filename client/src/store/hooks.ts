import { useAtomValue, useSetAtom } from 'jotai'
import {
  ballXAtom,
  ballYAtom,
  paddleTopXAtom,
  paddleBottomXAtom,
  computerScoreAtom,
  playerScoreAtom,
  playerMovedAtom,
  isGameOverAtom,
  winnerAtom,
  wsAtom,
} from './primitive-atoms'
import { newGameAtom } from './derived-atoms/game-over-atoms'
import { tickGameAtom } from './derived-atoms/tick-game-atom'
import { initWebSocketAtom } from './derived-atoms/init-websocket-atom'

export const useTickGame = () => useSetAtom(tickGameAtom)
export const useBallX = () => useAtomValue(ballXAtom)
export const useBallY = () => useAtomValue(ballYAtom)

export const usePaddleTopX = () => useAtomValue(paddleTopXAtom)
export const usePaddleBottomX = () => useAtomValue(paddleBottomXAtom)

export const useSetPaddleBottomX = () => useSetAtom(paddleBottomXAtom)
export const useSetPlayerMoved = () => useSetAtom(playerMovedAtom)

export const useComputerScore = () => useAtomValue(computerScoreAtom)

export const usePlayerScore = () => useAtomValue(playerScoreAtom)
export const useGameOver = () => useAtomValue(isGameOverAtom)
export const useWinner = () => useAtomValue(winnerAtom)
export const useNewGame = () => useSetAtom(newGameAtom)

export const useInitWebsocket = () => useSetAtom(initWebSocketAtom)
export const useWebSocket = () => useAtomValue(wsAtom)
