import { atom } from 'jotai'
import * as c from '../shared/constants'

export const ballXAtom = atom(c.CENTER_X)
export const ballYAtom = atom(c.CENTER_Y)

export const speedXAtom = atom(c.SPEED_X)
export const speedYAtom = atom(c.SPEED_Y)

export const paddleTopXAtom = atom(c.PADDLE_DEFAULT_X)
export const paddleBottomXAtom = atom(c.PADDLE_DEFAULT_X)

export const playerMovedAtom = atom(false)
export const paddleContactAtom = atom(false)

export const computerScoreAtom = atom(0)
export const playerScoreAtom = atom(0)

export const computerSpeedAtom = atom(c.COMPUTER_SPEED)

export const isGameOverAtom = atom(false)
export const winnerAtom = atom('')
