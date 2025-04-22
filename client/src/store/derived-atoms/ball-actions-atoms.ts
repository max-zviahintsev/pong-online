import { atom } from 'jotai'
import {
  ballXAtom,
  ballYAtom,
  speedXAtom,
  speedYAtom,
  playerMovedAtom,
  paddleContactAtom,
} from '../primitive-atoms'
import { CENTER_X, CENTER_Y, SPEED_Y_MEDIUM } from '../../shared/constants'

export const ballMoveAtom = atom(null, (get, set) => {
  const speedX = get(speedXAtom)
  const speedY = get(speedYAtom)
  const playerMoved = get(playerMovedAtom)
  const paddleContact = get(paddleContactAtom)

  set(ballYAtom, (prev) => prev - speedY)

  if (playerMoved && paddleContact) {
    set(ballXAtom, (prev) => prev + speedX)
  }
})

export const ballResetAtom = atom(null, (get, set) => {
  set(ballXAtom, CENTER_X)
  set(ballYAtom, CENTER_Y)
  set(speedYAtom, SPEED_Y_MEDIUM)
  set(paddleContactAtom, false)
})
