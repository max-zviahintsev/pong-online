import { useWinner, useNewGame } from '../store/hooks'

function GameOver() {
  const winner = useWinner()
  const setNewGame = useNewGame()

  const text = winner

  const handleClick = () => {
    setNewGame()
  }

  return (
    <div className='wrapper'>
      <div className='result-text'>{text}</div>

      <button className='result-button' type='button' onClick={handleClick}>
        Play again
      </button>
    </div>
  )
}

export default GameOver
