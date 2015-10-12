window.onload = function(){

  var display = document.getElementById("display")[0];
  var startButton = document.getElementById("startButton");
  var startClickCounter = 1;
// var roundCounter = 1;
// var playerOnePoints = 0;
// var playerTwoPoints = 0;

// --- BUILD: ROUNDS / DISPLAY MESSAGING FRAMEWORK
// Create a series of functions for when a player clicks on start button at each round 
// 1. Update display
// 2. see 'BUILD - ROUND ACTIVITY' for additional functions to action

$(function(){
  $("#startButton").on("click", function(){

    if (startClickCounter % 2 === 0) { // i.e. 2, 4, 6 (player 2)

      if (startClickCounter === 6) { 
        $("#display").val("It's the final round of the game. Make it worth it Player 2!");
        startClickCounter++;
        // hideSquares();

      } else {
        $("#display").val("Player 2, you're up. Choose your answer from the 3 options below!"); 
        startClickCounter++; 
        // hideSquares();
      }

      } else if (startClickCounter > 6) { 
        console.log("GAME OVER");
        $("#display").val("GAME OVER!");
        // Run OVERALL WINNER function
        // hideSquares();

    } else { 
      $("#display").val("Here we go Player 1. Choose your answer from the 3 options below!");
      startClickCounter++;
      hideSquares();
    }
  });
});


//  --- BUILD: GRID  ---> BLOCKER
// Get grid lis to dissappear one by one at different speeds ---> BLOCKER

//WORKING *ISH FUNCTION
function hideSquares(){
 var $lis = $("li");
 $.each($lis, function(index, element){
  setTimeout(function(){
    $(element).css("background", "none");
  }, 500 * index+1);
 });
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// //looping - auto starts at 0
// $(function(){
//   var $lis = $("li");
//   $.each($lis, function(index, element){
//     $(element).hide(5000 * index+1);
//   });
// });


// --- BUILD: ROUND ACTIVITY (IMAGES, OPTIONS, ACTION ROUND WINNER FUNCTIONS)
// RENDER IMAGE(S) BEHIND GRID BASED ON THE ROUND AND PLAYER TURN (6 IN TOTAL)
// UPDATE OPTION BUTTONS TEXT WITH 3 TV SHOWS - 1 OF WHICH MATCHES THE IMAGE(S)
// 1 CORRECT OPTION - RUN A 'ROUND WINNER' FUNCTION 
// 2 OTHER OPTION BUTTONS - RUN A 'ROUND LOSER' FUNCTION

// --- BUILD: ROUND WINNER FUNCTION
// Must increase playerPoints variable

// --- BUILD: ROUND LOSER FUNCTION 

// --- BUILD: OVERALL WINNER FUNCTION

}




