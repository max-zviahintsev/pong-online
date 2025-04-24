import { WebSocket } from 'ws'

export type Clients = Map<string, WebSocket>

export type StartGameMessage = {
  type: 'game_start'
  payload: {
    isGameStarted: boolean
    clientId: string
  }
}

export type PaddlePositionMessage = {
  type: 'paddle_position'
  payload: {
    x: string
  }
}

export type GameMessage = StartGameMessage | PaddlePositionMessage
