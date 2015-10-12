var display,
startClickCounter = 1, 
roundCounter = 1,
playerOnePoints = 0,
playerTwoPoints = 0,
playing = false,
totalTime = 10000,
currentChoice;

var rounds = {
  "Gladiators": {
    title: "Gladiators",
    image: "./images/gladiators.png",
    answers: ["Gladiators", "Blue Peter", "Full House"]
  },
  "Fun House": {
    title: "Fun House",
    image: "./images/funhouse.png",
    answers: ["Keenan & Kel", "Fun House", "Noel's House Party"]
  },
  "Noel's Houseparty": {
    title: "Noel's Houseparty",
    image: "./images/noels-house-party.png",
    answers: ["This Is Your Life", "Noel's Houseparty", "Blind Date"]
  },
  "Keenan & Kel": {
    title: "Keenan & Kel",
    image: "./images/keenan-kel.png",
    answers: ["Buffy", "Keenan & Kel", "Blind Date"]
  },
  "Power Rangers": {
    title: "Power Rangers",
    image: "./images/power-rangers.png",
    answers: ["Gladiators", "Power Rangers", "Noel's House Party"]
  },
  "Xena: Warrior Princess": {
    title: "Xena: Warrior Princess",
    image: "./images/xena.png",
    answers: ["Power Rangers", "Buffy", "Xena: Warrior Princess"]
  },
  "The X Files": {
    title: "The X Files",
    image: "./images/xfiles.png",
    answers: ["The X Files", "This Is Your Life", "Buffy"]
  },
  "CD:UK": {
    title: "CD:UK",
    image: "./images/cduk.png",
    answers: ["Top of the Pops", "Eastenders", "CD:UK"]
  },
  "Saved By The Bell": {
    title: "Saved By The Bell",
    image: "./images/saved-by-bell.png",
    answers: ["Sister Sister", "Power Rangers", "Saved By The Bell"]
  },
  "Baywatch": {
    title: "Baywatch",
    image: "./images/baywatch.png",
    answers: ["Baywatch", "This Is Your Life", "Gladiators"]
  },
  "Blind Date": {
    title: "Blind Date",
    image: "./images/blind-date.png",
    answers: ["Live & Kicking", "Blind Date", "Surprise Surprise"]
  },
  "This Is Your Life": {
    title: "This Is Your Life",
    image: "./images/this-life.png",
    answers: ["Surprise Surprise", "Blind Date", "This Is Your Life"]
  }
}

$(initialize);

function initialize(){
  $("#startButton").on("click", start);
  $(".answer").on("click", guess);
}

function getRoundLength(){
  if (roundCounter === 1) return 800;
  if (roundCounter === 2) return 1000;
  if (roundCounter === 3) return 1200;
}

function start(){
  if (playing) return false;
  playing = true;

  var choices    = Object.keys(rounds);
  var randomName = choices[Math.floor(Math.random()* choices.length)];
  currentChoice  = rounds[randomName];
  $('.grid').css("background", "url('"+currentChoice.image+"')");


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
  clock = setInterval(function() {
    if (!playing) return false; 
    var clockValue = (totalTime - counter) / 1000;
    $("#timer").html(clockValue);
    counter += interval;

    if (clockValue === 0) return clearInterval(clock);
  }, interval);
}

function guess(){
  var player   = (startClickCounter % 2 === 0) ? 2 : 1;
  // var playerOneResults   = document.getElementsByID

  if (!playing) return false;
  if ($(this).val() === currentChoice.title) {
    if (player === 1) {
      $("#display").val("Congrats Player 2! You nailed that round. Player 1, you know the drill - click START now."); 

        //Updating scoreboard / points
        // if ("#levelPoints1") !== "" { //if DOES NOT contain an empty string (i.e. has win/lose there) then move on
        // } else {
        //   ("#levelPoints1").val("WIN");
        //  playerTwoPoints++;   
        // }
        
      } else {
        $("#display").val("Congrats Player 1! You killed it. So Player 2 you're up. Click Start now.");
      }
    } else {

      //Updating scoreboard / points
      // if ("#levelPoints1") !== "" { //if the level points element DOES NOT contain an empty string (i.e. has win/lose) then move on
      // } else {
      //   ("#levelPoints1").val("LOSE");  
      // }

    }
// resetTimer(); (BLOCKER)
resetBoard();
}





// ---------------------------------------

//BLOCKERS


//Reset Timer (when reset board)
// When a player chooses one of the options, the timer should stop and reset. Close to working but still far.

// function resetTimer(){
//   var clockValue = 0;
//   $("#timer").html(clockValue);
//   playing = false;
// }

// -------

// BUILD function: when timer ends, the player in play should 'lose'
// Haven't had a chance to tackle yet as still stuck on updating scoreboard

// function guess()
// Update player scoreboard (win/lose) and increase points 
// Win: lines 175-180
// Lose: 189-193














