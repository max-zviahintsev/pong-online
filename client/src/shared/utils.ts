import { CANVAS_WIDTH, PADDLE_WIDTH } from './constants'

const calculatePosition = (x: number) => {
  return Math.max(0, Math.min(x, CANVAS_WIDTH - PADDLE_WIDTH))
}

export { calculatePosition }
