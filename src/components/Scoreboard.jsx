
function Scoreboard({roundNum: {round, setRound}}) {

  let turn = "X";
  console.log(`Round: ${round}`)
  if(round % 2 == 0){
    turn = "X"

  }else{
    turn = "O"
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