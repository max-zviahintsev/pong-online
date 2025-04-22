import { atom } from 'jotai'
import {
  ballXAtom,
  ballYAtom,
  speedXAtom,
  speedYAtom,
  playerMovedAtom,
  paddleContactAtom,
  paddleTopXAtom,
  paddleBottomXAtom,
  computerSpeedAtom,
  computerScoreAtom,
  playerScoreAtom,
} from '../primitive-atoms'
import { ballResetAtom } from './ball-actions-atoms'
import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  PADDLE_CENTER,
  PADDLE_WIDTH,
  COMPUTER_SPEED_FAST,
  SPEED_LIMIT,
  TRAJECTORY_MULTIPLIER,
} from '../../shared/constants'

export const ballBoundariesAtom = atom(null, (get, set) => {
  const speedX = get(speedXAtom)
  const speedY = get(speedYAtom)
  const ballX = get(ballXAtom)
  const ballY = get(ballYAtom)
  const playerMoved = get(playerMovedAtom)
  const paddleTopX = get(paddleTopXAtom)
  const paddleBottomX = get(paddleBottomXAtom)

  // Bounce off Left Wall
  if (ballX < 0 && speedX < 0) {
    set(speedXAtom, (prev) => -prev)
  }
  // Bounce off Right Wall
  if (ballX > CANVAS_WIDTH && speedX > 0) {
    set(speedXAtom, (prev) => -prev)
  }
  // Bounce off player paddle (bottom)
  if (ballY > CANVAS_HEIGHT - PADDLE_CENTER) {
    if (ballX > paddleBottomX && ballX < paddleBottomX + PADDLE_WIDTH) {
      set(paddleContactAtom, true)
      // Add Speed on Hit
      if (playerMoved) {
        set(speedYAtom, (prev) => prev - 1)
        // Max Speed
        if (speedY < -SPEED_LIMIT) {
          set(speedYAtom, -SPEED_LIMIT)
          set(computerSpeedAtom, COMPUTER_SPEED_FAST)
        }
      }
      set(speedYAtom, (prev) => -prev)

      const trajectoryX = ballX - (paddleBottomX + PADDLE_CENTER)
      set(speedXAtom, trajectoryX * TRAJECTORY_MULTIPLIER)
    } else if (ballY > CANVAS_HEIGHT) {
      // Reset Ball, add to Computer Score
      set(ballResetAtom)
      set(computerScoreAtom, (prev) => prev + 1)
    }
  }
  // Bounce off computer paddle (top)
  if (ballY < PADDLE_CENTER) {
    if (ballX > paddleTopX && ballX < paddleTopX + PADDLE_WIDTH) {
      // Add Speed on Hit
      if (playerMoved) {
        set(speedYAtom, (prev) => prev + 1)
        // Max Speed
        if (speedY > SPEED_LIMIT) {
          set(speedYAtom, SPEED_LIMIT)
        }
      }
      set(speedYAtom, (prev) => -prev)
    } else if (ballY < 0) {
      // Reset Ball, add to Player Score
      set(ballResetAtom)
      set(playerScoreAtom, (prev) => prev + 1)
    }
  }
})
