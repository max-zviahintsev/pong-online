import { useWebSocket } from './hooks/useWebSocket'
function App() {
  const socket = useWebSocket('ws://localhost:8080/ws-test-route')

  const sendMessage = () => {
    if (socket.current?.readyState === WebSocket.OPEN) {
      socket.current.send('Ping from client!')
    }
  }

  return (
    <div>
      <h1>🏓 Pong Online</h1>
      <button onClick={sendMessage}>Send Ping</button>
    </div>
  )
}

export default App
