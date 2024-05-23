import {useState} from 'react';

function Square({isXTurn, setIsXTurn}) {

  // const [isXTurn, setIsXTurn] = useState(true)
  // const [round, setRound] = useState(1)

  const boxClicked = (e) => {
    e.stopPropagation()

    if(!e.target.innerHTML){
      if(isXTurn == true){
        e.target.innerHTML = "X"
        console.log("Checkpoint X")
      }else{
        e.target.innerHTML = "O"
        console.log("Checkpoint O")
      }
      setIsXTurn(!isXTurn)
      // setRound(round + 1)
      
    }
  }

  return (
    <div onClick={(e) => boxClicked(e)} className="game-box"></div>
  )
}

export default Square