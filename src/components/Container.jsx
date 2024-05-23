import { useEffect, useRef, useState } from "react"
import Square from "./Square"


function Container() {
  const [board, setBoard] = useState(Array(9).fill(""))
  const [isXTurn, setIsXTurn] = useState(true)
  const [round, setRound] = useState(1)


  return (
    <div id="game-container">
      {board.map((e,idx) => {
        return (<Square key={idx} xTurn={{ isXTurn, setIsXTurn }} />)
      })}
    </div>
  )
}

export default Container