window.onload = function(){

// --------------------------------------------------------------------------

var display = document.getElementById("display")[0];
var startButton = document.getElementById("startButton");
var startClickCounter = 1;
var roundCounter = 1;
var playerOnePoints = 0;
var playerTwoPoints = 0;

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

    if (roundCounter === 1) {  

      if (startClickCounter % 2 === 0) { 
        $("#display").val("ROUND 1: PLAYER 2 | Choose your answer from the 3 options below!"); 
        var player = "player2";
        console.log(player);
        startClickCounter++; 
        hideSquares(320);
        roundCounter++;
        // countdownTimer(); >>> myInterval not defined to stops running rest of round (BLOCKER)
        // Run playerMove function

      } else { //PLAYER 1
        $("#display").val("ROUND 1: PLAYER 1 | Choose your answer from the 3 options below!");
        var player = "player1";
        console.log(player);
        startClickCounter++;
        hideSquares(320);
        // countdownTimer(); 
        // Run playerMove function
      }

    } else if (roundCounter === 2) { 
      
        if (startClickCounter % 2 === 0) { 
          $("#display").val("ROUND 2: PLAYER 2 | Choose your answer from the 3 options below!"); 
          var player = "player2";
          startClickCounter++;
          roundCounter++; 
          hideSquares(500);
          // countdownTimer();
          // Run playerMove function

        } else { //PLAYER 1
          $("#display").val("ROUND 2: PLAYER 1 | Choose your answer from the 3 options below!");
          var player = "player1";
          startClickCounter++;
          hideSquares(500);
          // countdownTimer();
          // Run playerMove function
        }

    } else if (roundCounter === 3) {

        if (startClickCounter % 2 === 0) { 
          $("#display").val("ROUND 3: PLAYER 2 | Choose your answer from the 3 options below!"); 
          var player = "player2";
          startClickCounter++;
          roundCounter++;
          hideSquares(700); 
          // countdownTimer();
          // Run playerMove function

        } else { //PLAYER 1
          $("#display").val("ROUND 3: PLAYER 1 | Choose your answer from the 3 options below!");
          var player = "player1";
          startClickCounter++;
          hideSquares(700);
          // countdownTimer();
          // Run playerMove function
        }

    } else {
      console.log("Game finished. Run winner function now");
      //RUN OVERALL WINNER FUNCTION
    }

  });
});



// --------------------------------------------------------------------------

//  --- BUILD: GRID  

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
};

// --------------------------------------------------------------------------

// --- BUILD: TIMER
// BLOCKER: my interval not defined

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

}
// --------------------------------------------------------------------------

// --- BUILD: ROUND WINNER FUNCTION

// function roundWinner() {
  // function will be invoked by a 'playerGuess' function when the player guesses CORRECTLY

  //if startClickCounter % 2 === 0 (PLAYER 2)
  //take in level, show 'WIN' on scoreboard for that level, increase playerTwoPoints by 1

  //else (PLAYER 1)
  //show 'win' on scoreboard for that level, increase playerOnePoints by 1
// }

// --------------------------------------------------------------------------

// --- BUILD: ROUND LOSER FUNCTION 

// function roundLoser() {
  // function will be invoked by a 'playerGuess' function when the player guesses INCORRECTLY OR TIMER TIMES OUT

  //if startClickCounter % 2 === 0 (PLAYER 2)
  //take in round (1,2,3), show 'LOSE' on scoreboard for that round

  //else (PLAYER 1)
  //take in round (1,2,3), show 'LOSE' on scoreboard for that round
// }

// --------------------------------------------------------------------------

// --- BUILD: OVERALL WINNER FUNCTION

// function gameWinner() {
  // function will be invoked by by the master 'else' statement in the ROUNDS FRAMEWORK function

  //if playerOnePoints > playerTwoPoints >>> PLAYER 1 WINS THE GAME!

  //else (PLAYER 1) >>> PLAYER 2 WINS THE GAME
// }


// --------------------------------------------------------------------------

// --- BUILD: newGameAssets Function (New Image & New Options) 
// When a player clicks the start button, and they enter into ROUND FRAMEWORK, this function needs to update the image behind the grid with a set collection of button options, one of which is the CORRECT answer
// When the correct button is clicked, it will run a function declaring ROUND WINNER (above)

//------>>>ROUND 1

// R1, PLAYER 1
// KENAN & KEL
// IMG: http://imagesmtv-a.akamaihd.net/uri/mgid:uma:image:mtv.com:10855702?quality=0.8&format=jpg&width=1440&height=810&.jpg
// BUTTONS (A,B,C): THE FRESH PRINCE, KENAN & KEL, LIVE & KICKING
// >>>> ROUND 1 CLICK EVENT
// if BUTTON === "B" : round win
// else : round lose


// R1, PLAYER 2
// NOEL'S HOUSE PARTY
// IMG: http://i4.mirror.co.uk/incoming/article6193535.ece/ALTERNATES/s1200/Noel-Edmonds-with-Mr-Blobby.jpg
// BUTTONS (A,B,C): HOLLYOAKS, TFI FRIDAY, NOEL'S HOUSE PARTY
// >>>> ROUND 2 CLICK EVENT
// if BUTTON === "C" : round win
// else : round lose


//------>>>ROUND 2

// R2, PLAYER 1
// GLADIATORS
// IMG: http://i1.mirror.co.uk/incoming/article6243049.ece/ALTERNATES/s1200/Gladiators.jpg
// BUTTONS (A,B,C): GLADIATORS, SAVED BY THE BELL, WWF
// >>>> ROUND 3 CLICK EVENT
// if BUTTON === "B": round win
// else : round lose

//R2, PLAYER 2
// FUN HOUSE
//IMG:
//BUTTONS: NEIGHBOURS, FUN HOUSE, TFI FRIDAY


//------>>>ROUND 3

//R3, PLAYER 1
//SOMEONE:
//IMG:
//BUTTONS:

//R3, PLAYER 2
//SOMEONE:
//IMG:
//BUTTONS:


// --------------------------------------------------------------------------


// --- BUILD: playerOneMove / playerTwoMove

// Function invoked in ROUNDS FRAMEWORK function, but actions itself only when a player clicks on an option button (during the 10 seconds)
// In order to return something, we need to take in: 

// >>> Did they click the correct button? (need to build it so we explicitly take in a photo file name and say if it's this then they win otherwise they do not)
// >>> What ROUND is it, so we can apply a result to the player's scoreboard - have this in roundCounter variable
// HTML: <div class="optionButtons" id="A">A:</div>


// $(function(){

//   $(".optionButtons").on("click", function(){
//     if (this.id("A"))
//   }

// function playerMove






