const checkHorizontal = (board) => {

  for(let i = 0;i<3;i++){
    let tmp = i*3
    if(board[tmp] === board[tmp+1] && board[tmp+1] === board[tmp+2]){
      if(board[tmp] !== null){
        alert("win")
      }
    }
    // 0, 1, 2
    // 3, 4, 5
    // 6, 7, 8
  }


}

const checkVertical = (board) => {
  for(let i = 0; i < 3; i++){
    let tmp = i
    if(board[tmp] === board[tmp+3] && board[tmp+3] === board[tmp+6]){
      if(board[tmp] !== null){
        alert("win")
      }
    }
  }
}

const checkDiagonal = (board) => {
  if(board[0] === board[4] && board[4] === board[8]){
    if(board[0] !== null){
      alert("win")
    }
  }
  if(board[2] === board[4] && board[4] === board[6]){
    if(board[2] !== null){
      alert("win")
    }
  }
}

export {checkHorizontal, checkVertical, checkDiagonal}