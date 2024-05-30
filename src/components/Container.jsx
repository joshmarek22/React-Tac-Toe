import { useEffect, useState } from "react"
import Square from "./Square"
import Scoreboard from "./Scoreboard"
import { checkDiagonal, checkHorizontal, checkVertical } from "../tools/WinConditions"

function Container() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const [round, setRound] = useState(0)

  useEffect(()=>{
    console.log(`round num: ${round}`)
    if(round >= 3){
    checkHorizontal(board)
    checkVertical(board)
    checkDiagonal(board)
    }
    if(round >= 9){
      alert("Game is a Scratch")
    }

},[round])

  return (
    <>
    <h1 className="title-header">React-Tac-Toe</h1>
    <div className="game-body">
      <div id="game-container">
        {board.map((e,idx) => {
          return (<Square key={idx} xTurn={{ isXTurn, setIsXTurn }} roundNum={{round, setRound}} updateBoard={{board, setBoard}} squareNum={idx}/>)
        })} 
      </div>
      <Scoreboard roundNum = {{round, setRound}}/>
    </div>
    </>
  )
}

export default Container