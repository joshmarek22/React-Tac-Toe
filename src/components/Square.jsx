
function Square({ xTurn: { isXTurn, setIsXTurn }, roundNum: {round, setRound}, squareNum, updateBoard: {board}}) {

  const boxClicked = (e) => {
    e.stopPropagation()

    if(!e.target.innerHTML){
      if(isXTurn == true){
        e.target.innerHTML = "X"     
      }else{
        e.target.innerHTML = "O"
      }
      
      setIsXTurn(!isXTurn)
      board[squareNum] = e.target.innerHTML
      setRound(round + 1)
    }
  }

  return (
    <div onClick={(e) => boxClicked(e)} className="game-box" id={squareNum}></div>
  )
}

export default Square