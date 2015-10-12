var display,
    startClickCounter = 1, // The number of times that the player has clicked start
    roundCounter = 1,
    playerOnePoints = 0,
    playerTwoPoints = 0,
    playing = false,
    totalTime = 10000,
    currentChoice;

var rounds = {
  "Gladiators": {
    title: "Gladiators",
    image: "http://i1.mirror.co.uk/incoming/article6243049.ece/ALTERNATES/s1200/Gladiators.jpg",
    answers: ["Gladiators", "Blue Peter", "Full House"]
  },
  "Fun House": {
    title: "Fun House",
    image: "http://beaut.ie/wp-content/uploads/2015/07/funhouse-2-1200x630-c-default.jpg",
    answers: ["Keenan & Kel", "Fun House", "Noel's House Party"]
  },
  "Noel's Houseparty": {
    title: "Noel's Houseparty",
    image: "http://i4.mirror.co.uk/incoming/article6193535.ece/ALTERNATES/s1200/Noel-Edmonds-with-Mr-Blobby.jpg",
    answers: ["This Is Your Life", "Noel's Houseparty", "Blah"]
  },
  "Keenan & Kel": {
    title: "Keenan & Kel",
    image: "http://imagesmtv-a.akamaihd.net/uri/mgid:uma:image:mtv.com:10855702?quality=0.8&format=jpg&width=1440&height=810&.jpg",
    answers: ["Blah", "Keenan & Kel", "Blah"]
  },
  "Power Rangers": {
    title: "Power Rangers",
    image: "http://cdn.wegotthiscovered.com/wp-content/uploads/powerrangers8.jpg",
    answers: ["Gladiators", "Power Rangers", "Noel's House Party"]
  },
  "Xena: Warrior Princess": {
    title: "Power Rangers",
    image: "http://static02.mediaite.com/themarysue/uploads/2015/07/lucy_lawless_-_xena_warrior_princess_1241564937.jpeg",
    answers: ["Power Rangers", "Buffy", "Xena: Warrior Princess"]
  },
  "The X Files": {
    title: "The X Files",
    image: "http://blogs-images.forbes.com/merrillbarr/files/2015/03/The-X-Files.jpg",
    answers: ["The X Files", "This Is Your Life", "Buffy"]
  },
  "CD:UK": {
    title: "CD:UK",
    image: "http://i2.cdnds.net/13/08/618x407/uktv-ant-and-dec-tv-career-in-pictures-4.jpg",
    answers: ["Top of the Pops", "Eastenders", "CD:UK"]
  },
  "Saved By The Bell": {
    title: "Saved By The Bell",
    image: "http://cdn0.dailydot.com/cache/0f/c3/0fc3c9b9609ddb4426cba3b658c899ed.jpg",
    answers: ["Sister Sister", "Power Rangers", "Saved By The Bell"]
  },
  "Baywatch": {
    title: "Baywatch",
    image: "http://cdn29.us2.fansshare.com/pictures/baywatch/baywatch-rgb-2067345650.jpg",
    answers: ["Baywatch", "This Is Your Life", "Gladiators"]
  },
  "Blind Date": {
    title: "Blind Date",
    image: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2015/8/3/1438618507044/da409a08-b84c-4cce-930e-435cc5c4981b-2060x1236.jpeg",
    answers: ["Live & Kicking", "Blind Date", "Surprise Surprise"]
  },
  "Surprise Surprise": {
    title: "Surprise Surprise",
    image: "http://cdn.images.express.co.uk/img/dynamic/galleries/x701/66662.jpg",
    answers: ["Surprise Surprise", "Blind Date", "Top Of The Pops"]
  },
  "This Is Your Life": {
    title: "This Is Your Life",
    image: "http://elmerbernstein.com/wp-content/uploads/2003/02/thisisyourlife.jpg",
    answers: ["Surprise Surprise", "Blind Date", "This Is Your Life"]
  }
}

// Document Ready -> equivalent to window.onload, so you don't need both.
$(initialize);

function initialize(){
  $("#startButton").on("click", start);
  $(".answer").on("click", guess);
}

function getRoundLength(){
  if (roundCounter === 1) return 320;
  if (roundCounter === 2) return 500;
  if (roundCounter === 3) return 700;
}

function start(){
  if (playing) return false;
  playing = true;

  var choices    = Object.keys(rounds);
  var randomName = choices[Math.floor(Math.random()* choices.length)];
  currentChoice  = rounds[randomName];
  $('.grid').css("background", "url('"+currentChoice.image+"')");
  
  // Add the answers from currentChoice.answers
  $.each($('.answer'), function(index, element, array){
    $(element).val(currentChoice.answers[index]);
  })

  var player   = (startClickCounter % 2 === 0) ? 2 : 1;
  var level    = getRoundLength();

  $("#display").val("ROUND "+ roundCounter +": PLAYER "+ player +" | Choose your answer from the 3 options below!");
  hideSquares(level);

  setTimeout(function(){
    resetBoard();
  }, totalTime + 2000)
  
  countdownTimer();
  
  (startClickCounter % 2 === 0) ? roundCounter++ : false;
  startClickCounter++;
}

function hideSquares(level){      // when calling hideSquares in rounds, pass in msecs
  var $squares = shuffleArray(); 
  $.each($squares, function(index, element){
    setTimeout(function(){
      if (!playing) return false;
      $(element).css("background", "none");
    }, level * index+1);
  }); 
};

function resetBoard(){
  $('.square').css("background", "black");
  playing = false;
}

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

function countdownTimer(time) {
  var counter  = 0
  var interval = 1000;
  var clock;
  clock = setInterval(function() { //myinterval is not defined (at end of 10 sec countdown) Fuck knows.
    var clockValue = (totalTime - counter) / 1000;
    $("#timer").html(clockValue);
    counter += interval;

    if (clockValue === 0) return clearInterval(clock);
  }, interval);
}

function guess(){
  if (!playing) return false;
  if ($(this).val() === currentChoice.title) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
  resetBoard();
}




















// --------------------------------------------------------------------------



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






