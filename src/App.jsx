import { useState, useEffect, useRef } from 'react';

function App() {
  const [isXTurn, setIsXTurn] = useState(true)
  const [round, setRound] = useState(1)
  const [board, setBoard] = useState([])
  const container = useRef(null)
  useEffect(() => {
    setBoard([...container.current.children].map((child) => {
      return child.innerHTML
    }))
    checkHorizontal()
    console.log(board)
  }, [])
  

  const boxClicked = (e) => {
    e.stopPropagation()

    if(!e.target.innerHTML){
      if(isXTurn == true){
        e.target.innerHTML = "X"
      }else{
        e.target.innerHTML = "O"
      }
      setIsXTurn(!isXTurn)
      setRound(round + 1)
      
    }
    
  }
  const test = (e) => {
    console.log(e.children);
  }

const checkHorizontal = () => {
  if(board[0] === board[1] && board[1] === board[2]){
    console.log("win")
  }
}

//Read wether box has X or O
//check if it meets hori, vert, diag winning contidions 
//return someting if win, null if not 

  
  return (
    <>
    <div ref={container}  id="game-container">
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
        <div onClick={(e) => boxClicked(e)} className="game-box"></div>
    </div>
    
    </>

  )
}

export default App
