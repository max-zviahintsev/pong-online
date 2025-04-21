import { useEffect, useRef } from 'react'

export function useWebSocket(url: string) {
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    const socket = new WebSocket(url)
    socketRef.current = socket

    socket.onopen = () => {
      console.log('🟢 WebSocket connection established')
      socket.send('Hello from client!')
    }

    socket.onmessage = (event) => {
      console.log(`📨 Message from server: ${event.data}`)
    }

    socket.onclose = () => {
      console.log('🔴 WebSocket connection closed')
    }

    socket.onerror = (error) => {
      console.error('❌ WebSocket error:', error)
    }

    return () => {
      socket.close()
    }
  }, [url])

  return socketRef
}
