import { atom } from 'jotai'
import { ballMoveAtom } from './ball-actions-atoms'
import { ballBoundariesAtom } from './ball-boundaries-atom'
import { gameOverAtom } from './game-over-atoms'

export const tickGameAtom = atom(null, (get, set) => {
  set(ballMoveAtom)
  set(ballBoundariesAtom)
  set(gameOverAtom)
})
