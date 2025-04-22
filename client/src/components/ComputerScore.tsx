import { usePlayerScore } from '../store/hooks'
import { Text } from 'react-konva'
import { PLAYER_SCORE_Y } from '../shared/constants'

function ComputerScore() {
  const playerScore = usePlayerScore()

  return (
    <Text
      id='player-score'
      x={20}
      y={PLAYER_SCORE_Y}
      text={playerScore.toString()}
      fontSize={22}
      fontFamily='Courier New'
      fill='white'
    />
  )
}

export default ComputerScore
