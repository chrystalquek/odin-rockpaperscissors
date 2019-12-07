<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <script>




function computerplay(){
    const num = Math.random()
    return num < (1/3)
        ? "rock"
        : num > (1/3)
            ? "paper"
            : "scissors";

}

function playRound(playerSelection, computerSelection) {
    // your code here!
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    const arr = ["rock", "paper", "scissors"];
    for (let i = 0; i < 2; i++) {
        if (player == arr[i]){
            player = i;
            break;
        }
    }
    for (let i = 0; i < 2; i++) {
        if (computer == arr[i]){
            computer = i;
            break;
        }
    }

    return (player === 1 && computer === 3)
        ? "player wins"
        : (player === 3 && computer === 1)
            ? "computer wins"
            : player > computer
                ? "player wins"
                : player == computer
                    ? "draw"
                    : "computer wins";
}
const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

</script>
</body>
</html>


