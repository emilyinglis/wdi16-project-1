$(document).ready(function(){
  $(".Modal").hide();
    $(".trigger-button").click(function(){
      $(".Modal").fadeToggle(1000);
    });
    $(".Close").click(function(){
      $(".Modal").fadeOut(1000);
    });
});
// Esc Key, hide menu.
$(document).keydown(function(e) {
if(e.keyCode == 27) {
    $(".Modal").fadeOut(1000);
}
});


var display,
startClickCounter = 0, 
roundCounter = 0,
playerOnePoints = 0,
playerTwoPoints = 0,
playing = false,
totalTime = 10000,
currentChoice,
clock;


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
  if (roundCounter === 1) return 1500;
  if (roundCounter === 2) return 5000;
  if (roundCounter === 3) return 1000;
}

function start(){
  if (playing) return false;
  playing = true;

  (startClickCounter % 2 === 0) ? roundCounter++ : false;
  startClickCounter++;

  var choices    = Object.keys(rounds);
  var randomName = choices[Math.floor(Math.random()* choices.length)];
  currentChoice  = rounds[randomName];
  $('.grid').css("background", "url('"+currentChoice.image+"')");


  $.each($('.answer'), function(index, element, array){
    $(element).val(currentChoice.answers[index]);
  })

  var player   = (startClickCounter % 2 === 0) ? 2 : 1;
  var level    = getRoundLength();

  $("#display").val("ROUND "+ roundCounter +": PLAYER "+ player +" | You've 5 seconds on the clock. Select your answer using the buttons below!");

  countdownTimer();

}

function hideSquares(level){      
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
  clearInterval(clock)
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
  clock = setInterval(function() {
    var level = getRoundLength()
    if (!playing) return false; 
    var clockValue = (totalTime - counter) / 1000;
    $("#timer").html(clockValue);
    counter += interval;
    hideSquares(level);

    if (clockValue === 0){ 
      var player   = (startClickCounter % 2 === 0) ? 2 : 1;

      $('#levelPoints'+roundCounter+'Player'+player).val("LOSE")
      resetBoard();

      return clearInterval(clock);
    }
  }, interval);
}

function guess(){
  var player   = (startClickCounter % 2 === 0) ? 2 : 1;

  if (!playing) return false;
  if ($(this).val() === currentChoice.title) {

    $('#levelPoints'+roundCounter+'Player'+player).val("WIN")
    if(player===1){
      $("#display").val("Nice work Player 1. Player 2, let's see what you can do. Click START now!");
      playerOnePoints++
    }else{
      $("#display").val("Check you out Player 2! Player 1, you know the drill - get clicking that START button!");
      playerTwoPoints++
    }

  } else {
    $('#levelPoints'+roundCounter+'Player'+player).val("LOSE")
  }

  resetBoard();
}












