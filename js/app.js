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
  clock = setInterval(function() {
    if (!playing) return false; 
    var clockValue = (totalTime - counter) / 1000;
    $("#timer").html(clockValue);
    counter += interval;

    if (clockValue === 0) return clearInterval(clock);
  }, interval);
}

//NOT WORKING
// function resetTimer(){
//   var clockValue = 0;
//   $("#timer").html(clockValue);
//   playing = false;
// }

function guess(){
  if (!playing) return false;
  if ($(this).val() === currentChoice.title) {
    console.log("correct"); 
    
  } else {
    console.log("incorrect");
  }
  resetTimer();
  resetBoard();
}





// ---------------------------------------

















