export const resetLocalStorage = ()=>{
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}

export const saveGameinLocalStorage = (saveBoard) => {
    localStorage.setItem('board', JSON.stringify(saveBoard))
}

export const saveTurninLocalStorage = (saveTurn) => {
    localStorage.setItem('turn', saveTurn)
}