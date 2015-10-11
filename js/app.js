window.onload = function(){

  var display = document.getElementById("display")[0];
  var startButton = document.getElementById("startButton");
  var startClickCounter = 0;
// var roundCounter = 1;
// var playerOnePoints = 0;
// var playerTwoPoints = 0;

// --- ROUNDS --- BLOCKER 
// Create a series of functions for when a player clicks on start button at each round 
// Win: alternating display between player 1 and 2
// Blocker: Not recognising counter @ a value of 6 

$(function(){
  $("#startButton").on("click", function(){

  if (startClickCounter % 2) { // i.e. 2, 4, 6 (player 2)
    
    console.log("first if passed");

        if (startClickCounter === 6) { // i.e. last round for player 2 --- BLOCK : NOT WORKING
          console.log("final go for player 2");
          $("#display").val("It's your moment Player 2. Make it worth it!");
          // hideSquares();

        } else {
          $("#display").val("Player 2, you're up. Choose your answer from the 3 options below!"); 
          startClickCounter++; 
          // hideSquares();
        } 

      } else { // not recognising counter value
        console.log("straight to else");
        $("#display").val("Player 1, you're up. Choose your answer from the 3 options below!");
        startClickCounter++;
        // hideSquares();
      }
    });
});




//  --- GRID 
// Get grid lis to dissappear one by one at different speeds ---> BLOCKER

function hideSquares(){     
    $("li").css("background", "none"); // need to remove border also
};

// //looping - auto starts at 0
// $(function(){
//   var $lis = $("li");
//   $.each($lis, function(index, element){
//     $(element).hide(5000 * index+1);
//   });
// });

}




// function displayPlayerOneMessage(){
//   $("#startButton").on("click", function(){   
//     $("#display").val("Player 1, you're up. Choose your answer from the 3 options below!");
//   });
// });
