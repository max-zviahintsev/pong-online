import { useComputerScore } from '../store/hooks'
import { Text } from 'react-konva'
import { COMPUTER_SCORE_Y } from '../shared/constants'

function ComputerScore() {
  const computerScore = useComputerScore()

  return (
    <Text
      id='computer-score'
      x={20}
      y={COMPUTER_SCORE_Y}
      text={computerScore.toString()}
      fontSize={22}
      fontFamily='Courier New'
      fill='white'
    />
  )
}

export default ComputerScore
