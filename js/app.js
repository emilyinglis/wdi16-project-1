window.onload = function(){

// --------------------------------------------------------------------------

var display = document.getElementById("display")[0];
var startButton = document.getElementById("startButton");
var startClickCounter = 1;
var playerOnePoints = 0;
var playerTwoPoints = 0;

// --------------------------------------------------------------------------

// --- BUILD: ROUND WINNER FUNCTION

function roundWinner() {
  // function will be invoked by a 'playerGuess' function when the player guesses CORRECTLY

  //if startClickCounter % 2 === 0 (PLAYER 2)
  //take in level, show 'WIN' on scoreboard for that level, increase playerTwoPoints by 1
 
  //else (PLAYER 1)
  //show 'win' on scoreboard for that level, increase playerOnePoints by 1
}

// --- BUILD: ROUND LOSER FUNCTION 

function roundLoser() {
  // function will be invoked by a 'playerGuess' function when the player guesses INCORRECTLY OR TIMER TIMES OUT

  //if startClickCounter % 2 === 0 (PLAYER 2)
  //take in round (1,2,3), show 'LOSE' on scoreboard for that round
 
  //else (PLAYER 1)
  //show 'win' on scoreboard for that level, increase player(number)Points by 1
}



// --- BUILD: OVERALL WINNER FUNCTION

// --------------------------------------------------------------------------

// --- BUILD: ROUNDS FRAMEWORK

// This functions reacts to the players clicking the start button.
// It'll be clicked every time a player starts a new round: I.e. P1 starts R1, P2 starts R1, P1 starts R2...
// The click function is redundant - GAME OVER - once the startClickCounter hits 7, and the winner is decided. 
// >>> NOTE. Will alert so the button needn't be clicked, it'll auto do this after end of round 3.

// Every time they click start, the following is actioned:

// ***DONE
// - Based on startClickCounter value upon click, it'll find the relevant round to action
// - Based on startClickCounter value upon click and round being actioned, it'll display messaging on the display for that player and round number 
// - Up the startClickCounter value (to move the game along)

// ***TO DO
// - Start timer countdown (BLOCKER: need to fix timer first)
// - Render a new image behind the grid (Compile 6 images, 18 options - 6 of which match the images for each round - static in v1)
// - Show 3 new options on the buttons, 1 of which is correct (Above)
// - Action hideSquares() function - passing an argument relevant to the round, i.e. round 1: 300, 2: 500. 3: 700

$(function(){

  $("#startButton").on("click", function(){

    if (startClickCounter < 3) { //ROUND1
      console.log("ROUND 1 START");

      if (startClickCounter % 2 === 0) { //PLAYER 2
        $("#display").val("ROUND 1: PLAYER 2 | Choose your answer from the 3 options below!"); 
        startClickCounter++; 
        hideSquares(320);
        // countdownTimer();

      } else { //PLAYER 1
        $("#display").val("ROUND 1: PLAYER 1 | Choose your answer from the 3 options below!");
        startClickCounter++;
        hideSquares(320);
        // countdownTimer(); // myInterval not defined to stops running rest of round (BLOCKER)
      }

    } else if (startClickCounter < 5) { // ROUND 2
      console.log("ROUND 2 START");

      if (startClickCounter % 2 === 0) { //PLAYER 2
        $("#display").val("ROUND 2: PLAYER 2 | Choose your answer from the 3 options below!"); 
        startClickCounter++; 
        hideSquares(500);
        // countdownTimer();

      } else { //PLAYER 1
        $("#display").val("ROUND 2: PLAYER 1 | Choose your answer from the 3 options below!");
        startClickCounter++;
        hideSquares(500);
        // countdownTimer();
      }

    } else if (startClickCounter < 7) {
      console.log("ROUND 3 START");

      if (startClickCounter % 2 === 0) { //PLAYER 2
        $("#display").val("ROUND 3: PLAYER 2 | Choose your answer from the 3 options below!"); 
        startClickCounter++;
        hideSquares(700); 
        // countdownTimer();

      } else { //PLAYER 1
        $("#display").val("ROUND 3: PLAYER 1 | Choose your answer from the 3 options below!");
        startClickCounter++;
        hideSquares(700);
        // countdownTimer();
      }

    } else {
      console.log("Game finished. Run winner function now");
      //RUN OVERALL WINNER FUNCTION
    }
  });
});


// --------------------------------------------------------------------------


//  --- BUILD: GRID  
// Need to update function so it stops running upon timer finishing and/or a wrong/right option button being clicked

function hideSquares(level){      // when calling hideSquares in rounds, pass in msecs
 var $squares = shuffleArray(); 
 $.each($squares, function(index, element){
  setTimeout(function(){
    $(element).css("background", "none");
  }, level * index+1);
});
};

function shuffleArray() {
  var $lis = $("li");
  for (var i = $lis.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = $lis[i];
    $lis[i] = $lis[j];
    $lis[j] = temp;
  }
  return $lis;
}

// --------------------------------------------------------------------------

// --- TIMER
// BLOCKER: my interval not defined
// Annoyingly slow to start (delays 1 sec GRRRR!)

function countdownTimer() {
  console.log("Timer")

  var i = 10;
  var myinterval = setInterval(function() { //myinterval is not defined (at end of 10 sec countdown) Fuck knows.
    $("#timer").html(i);

    if (i === 0) {
      clearInterval(myInterval);
    }
        else {
          i--;
        }
      }, 1000);
}
// --------------------------------------------------------------------------


}




