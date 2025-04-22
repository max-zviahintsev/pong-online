import { atom } from 'jotai'
import { playerMovedAtom, paddleTopXAtom, ballXAtom, computerSpeedAtom } from '../primitive-atoms'
import { PADDLE_CENTER } from '../../shared/constants'

export const aiAtom = atom(null, (get, set) => {
  const playerMoved = get(playerMovedAtom)
  const ballX = get(ballXAtom)
  const paddleTopX = get(paddleTopXAtom)
  const computerSpeed = get(computerSpeedAtom)

  if (playerMoved) {
    if (paddleTopX + PADDLE_CENTER < ballX) {
      set(paddleTopXAtom, (prev) => prev + computerSpeed)
    } else {
      set(paddleTopXAtom, (prev) => prev - computerSpeed)
    }
  }
})
