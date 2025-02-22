// importamos las combinaciones ganadoras
import { WINNING_COMBINATIONS,TURNS } from '../constants'

// funcion para determinar si hay un ganador
export const checkWinner = (BoardToCheck) => {
    // revisamos todas las combinaciones ganadoras
   for (const combination of WINNING_COMBINATIONS) {
     const [a, b, c] = combination
     if (BoardToCheck[a] && 
         BoardToCheck[a] === BoardToCheck[b] && 
         BoardToCheck[a] === BoardToCheck[c]) {
       return BoardToCheck[a]
     }
     
  }     
     return null

}


// verificar si el juego termina
export const CheckEndGame = (newBoard) => {
  // si hay un ganador, el juego termina
   return newBoard.every((square) => square !== null)
}

