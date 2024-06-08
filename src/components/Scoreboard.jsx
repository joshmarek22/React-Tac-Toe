
function Scoreboard({roundNum: {round, setRound}}) {

  let turn
  console.log(`Round: ${round}`)
  if(round % 2 == 0 && round != 9){
    turn = "X Turn"
  }else if (round % 2 != 0 && round != 9){
    turn = "O Turn"
  }else{
    turn = "Game Over"
  }



  return (
    <div className="scoreboard">
      <h1><u>Scoreboard</u></h1>
      <div className="turn-text-container">
        <span className="turnText">{turn}</span>
      </div>
    </div>
  );
}

export default Scoreboard;