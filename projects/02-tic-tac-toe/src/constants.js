// Objetivo: Crear un archivo de constantes para el proyecto
export const TURNS = {
    X: 'x',
    O: 'o'
  }
  
  // exportamos las combinaciones ganadoras
 export const WINNING_COMBINATIONS = [
    // filas
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // columnas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonales
    [0, 4, 8],
    [2, 4, 6]
  ]
  // pendiente crear algoritmo o funcion para determinar si es hay un ganador
  
  