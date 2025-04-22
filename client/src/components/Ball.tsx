import { Circle } from 'react-konva'
import * as c from '../shared/constants'
import { useBallX, useBallY } from '../store/hooks'

function Ball() {
  const ballX = useBallX()
  const ballY = useBallY()

  return <Circle id='ball' x={ballX} y={ballY} radius={c.BALL_RADIUS} fill='white' />
}

export default Ball
