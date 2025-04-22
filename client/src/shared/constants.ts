export const CANVAS_WIDTH = 500
export const CANVAS_HEIGHT = 700

export const CENTER_X = CANVAS_WIDTH / 2
export const CENTER_Y = CANVAS_HEIGHT / 2

export const COMPUTER_SCORE_Y = CENTER_Y - 30
export const PLAYER_SCORE_Y = CENTER_Y + 10

export const PADDLE_WIDTH = 50
export const PADDLE_HEIGHT = 10
export const PADDLE_CENTER = PADDLE_WIDTH / 2

export const PADDLE_TOP_Y = 10
export const PADDLE_BOTTOM_Y = CANVAS_HEIGHT - 20
export const PADDLE_DEFAULT_X = CENTER_X - PADDLE_CENTER

export const MIDDLE_LINE = [0, CENTER_Y, CANVAS_WIDTH, CENTER_Y]
export const LINE_DASH = [3, 3]

export const BALL_RADIUS = 5

export const SPEED_X = -1
export const SPEED_Y = -1
export const SPEED_Y_MEDIUM = -3
export const SPEED_LIMIT = 5
export const TRAJECTORY_MULTIPLIER = 0.3

export const COMPUTER_SPEED = 3
export const COMPUTER_SPEED_FAST = 6

export const WINNING_SCORE = 7
export const WINNER = {
  COMPUTER: 'You died',
  PLAYER: 'You win',
}
