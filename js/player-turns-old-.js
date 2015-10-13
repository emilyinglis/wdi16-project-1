// Old if/else statement for player turns 12/10/15


//--- Introduce ROUND functionality (above)

//if startClickCounter < 3 ---- run round 1
// else if startClickCounter < 5 --- run round 2
// else if startClickCounter < 7 --- run round 3
// else declare overall winning player

// if (startClickCounter % 2 === 0) { // i.e. 2, 4, 6 (player 2)

//   if (startClickCounter === 6) { 
//     $("#display").val("It's the final round of the game. Make it worth it Player 2!");
//     startClickCounter++;
//     // maybe update round counter?
//     // Render new image as background + 3 new options (1 correct)
//     // Restart timer
//     // hideSquares();

//   } else {
//     $("#display").val("Player 2, you're up. Choose your answer from the 3 options below!"); 
//     startClickCounter++; 
//     // Render new image as background + 3 new options (1 correct)
//     // Restart timer
//     // hideSquares();
//   }

//   } else if (startClickCounter > 6) { 
//     console.log("GAME OVER");
//     $("#display").val("GAME OVER!");
//     // Run OVERALL WINNER function
//     // hideSquares();

// } else { 
//   $("#display").val("Here we go Player 1. Choose your answer from the 3 options below!");
//   startClickCounter++;
//   // Render new image as background + 3 new options (1 correct)
//   // Restart timer
//   hideSquares(700); // using right now as an example of how this works
// }