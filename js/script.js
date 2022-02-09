function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' was clicked');
  
  let computerMove, playerMove, randomNumber;
  
  function getMoveName(argMoveId) {
    console.log('getMoveName called with an argument: ' + argMoveId);
    if (argMoveId == 1) {
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
      return 'scissors';
    } else {
      printMessage('I do not know the move with id ' + argMoveId + '. I assume it was about "rock".');
      return 'kamień';
    }
  }
  
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('displayResults called with arguments: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      printMessage('YOU WIN!');
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
      printMessage('YOU WIN!');
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
      printMessage('YOU WIN!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('DRAW!');
    } else {
      printMessage('YOU LOSE:(');
    }
    printMessage('I played ' + argComputerMove + ', and You ' + argPlayerMove + '.');
  }

  playerMove = argButtonName;
  console.log('players move: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('drawn number: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('computers move: ' + computerMove);
  displayResult(playerMove, computerMove);
}

const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('rock'); });
const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('paper'); });
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('scissors'); });