let currentPlayer = 1;
let totalOfTurns = 0;
let endGame = false;

function changeText(X, O) {
  return X;
  return O;
}

let counter = 1;
function performLogic(button, tile) {
  if(counter % 2 == 0) {
    $(tile).text('X');
  } else {
    $(tile).text('O');
  }
  counter = counter + 1;
  playerWin();
}
/*function playerWin() {
  if (checkHorizontal() || checkVeritcal() || checkDiagonal()) {
    return true; 
  } else {
    return false;
  }

/*function checkHorizontal() {

}

function checkVerical() {
  
}

function checkDiagonal() {
  
}*/

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});