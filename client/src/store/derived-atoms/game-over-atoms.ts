import { atom } from 'jotai'
import { playerScoreAtom, computerScoreAtom, isGameOverAtom, winnerAtom } from '../primitive-atoms'
import { WINNING_SCORE, WINNER } from '../../shared/constants'

export const gameOverAtom = atom(null, (get, set) => {
  const playerScore = get(playerScoreAtom)
  const computerScore = get(computerScoreAtom)
  const isGameOver = get(isGameOverAtom)

  if (isGameOver) {
    return
  }
  if (playerScore >= WINNING_SCORE) {
    set(isGameOverAtom, true)
    set(winnerAtom, WINNER.PLAYER)
  } else if (computerScore >= WINNING_SCORE) {
    set(isGameOverAtom, true)
    set(winnerAtom, WINNER.COMPUTER)
  }
})

export const newGameAtom = atom(null, (get, set) => {
  set(isGameOverAtom, false)
  set(winnerAtom, '')
  set(playerScoreAtom, 0)
  set(computerScoreAtom, 0)
})
