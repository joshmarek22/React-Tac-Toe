
function Scoreboard({roundNum: {round, setRound}}) {

  let turn
  console.log(`Round: ${round}`)
  if(round % 2 == 0){
    turn = "Player 1"
  }else{
    turn = "Player 2"
  }

  return (
    <div className="scoreboard">
      <h1><u>Scoreboard</u></h1>
      <div className="turn-text-container">
        <span className="turnText">{turn} turn</span>
      </div>
    </div>
  );
}

export default Scoreboard;