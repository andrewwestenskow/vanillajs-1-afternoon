const game = []


function play (boxId){
  var playerSpan = document.getElementById("player");
  var clickedBox = document.getElementById(boxId);

  if (game[boxId] !== undefined) {
    alert(`Pick a different box, cheater!`)
    return
  }

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O"
    clickedBox.innerText = "X"
    game[boxId] = "X"
  } else {
    playerSpan.innerText = "X"
    clickedBox.innerText = "O"
    game[boxId] = "O"
  }
  console.log(game);
  
  if (game[0] !== undefined && game[0] === game[1] && game[0] === game[2]) {
    console.log("condition met")
    alert(`${game[0]} wins!!!!`)
    resetBoard();
  }
  if (game[0] !== undefined && game[0] === game[4] && game[0] === game[8]) {
    console.log("condition met")
    alert(`${game[0]} wins!!!!`)
    resetBoard();
  }
  if (game[0] !== undefined && game[0] === game[3] && game[0] === game[6]) {
    console.log("condition met")
    alert(`${game[0]} wins!!!!`)
    resetBoard();
  }
  if (game[2] !== undefined && game[2] === game[4] && game[2] === game[6]) {
    console.log("condition met")
    alert(`${game[2]} wins!!!!`)
    resetBoard();
  }
  if (game[1] !== undefined && game[1] === game[4] && game[1] === game[7]) {
    console.log("condition met")
    alert(`${game[1]} wins!!!!`)
    resetBoard();
  }
  if (game[2] !== undefined && game[2] === game[5] && game[2] === game[8]) {
    console.log("condition met")
    alert(`${game[2]} wins!!!!`)
    resetBoard();
  }
  if (game[3] !== undefined && game[3] === game[4] && game[3] === game[5]) {
    console.log("condition met")
    alert(`${game[3]} wins!!!!`)
    resetBoard();
  }
  if (game[6] !== undefined && game[6] === game[7] && game[6] === game[8]) {
    console.log("condition met")
    alert(`${game[6]} wins!!!!`)
    resetBoard();
  }

  let fullBoard = true;
  for(let i = 0; i<=8; i++) {
    if (game[i] === undefined) {
      fullBoard = false;
    }
  }
  if (fullBoard === true) {
    alert(`Cat's game!`)
    resetBoard()
  }

}

function resetBoard () {
  location.reload()
}