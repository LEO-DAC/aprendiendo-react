import { useState } from 'react'
import './App.css'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinner,CheckEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import confetti from 'canvas-confetti'   
import { resetLocalStorage,saveGameinLocalStorage, saveTurninLocalStorage } from './logic/storage/index.js'

function App() {
//obtener variable del local storage


  const [board, setBoard] = useState(() => {
   const boardFromStorage = window.localStorage.getItem('board')
   if (boardFromStorage)  return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
   })

  const [turn, setTurn] = useState(() => {
          const turnFromStorage = window.localStorage.getItem('turn')
          return turnFromStorage ?? TURNS.X

  }
)
  // null es que no hay ganador, false es que ya hay ganador
  const [winner, setWinner] = useState(null)

// actualiza el tablero
const updateBoard = (index) => {
  // no actualizamos esta posición 
  // si ya tiene algo
  if (board[index] || winner) return

  //actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar aqui la partida
     saveGameinLocalStorage(newBoard)
     saveTurninLocalStorage(newTurn)
     
    //verificar si hay un ganador
    const NewWinner = checkWinner(newBoard)
    if (NewWinner) {
      confetti()
      setWinner(NewWinner)
    }else if (CheckEndGame(newBoard)) {
      setWinner(false)
    }
    // TODO check if game is over
}

const saveGame = (saveBoard) => {
// enviar el tablero a guardar en el local storage 
saveGameinLocalStorage(saveBoard) 

}

// resetear el juego
const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
  
  // resetear el local storage
  resetLocalStorage()
}

  return(
        <main className='board'>
              <h1>Tic tac toe</h1>
              <button onClick={resetGame}>Reset del juego</button>
              <section className='game'>
                  {
                    board.map((square, index) => {
                      return (
                        <Square
                         key={index}
                         index={index}
                         updateBoard={updateBoard}
                        >
                         {square} 
                        </Square>
                       )
                    })
            }
              </section>
              <section className='turn'>
                <Square isSelected={turn === TURNS.X}>
                  {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                  {TURNS.O}
                </Square>
              </section>
              <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    )

}

export default App
