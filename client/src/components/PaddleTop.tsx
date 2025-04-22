import { Rect } from 'react-konva'
import { usePaddleTopX } from '../store/hooks'
import { PADDLE_TOP_Y, PADDLE_WIDTH, PADDLE_HEIGHT } from '../shared/constants'

function PaddleTop() {
  const paddleTopX = usePaddleTopX()

  return (
    <Rect
      id='paddle-top'
      x={paddleTopX}
      y={PADDLE_TOP_Y}
      width={PADDLE_WIDTH}
      height={PADDLE_HEIGHT}
      fill='white'
    />
  )
}

export default PaddleTop
