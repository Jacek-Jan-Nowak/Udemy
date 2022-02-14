var gamePattern = [];

var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

//Start the game
$(document).keydown(function() {
  if(!started) {
  nextSequence();
  started = true;
}
});

//Detect click

$(".btn").click(function() {

  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
});

//Check the answer

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");

    if (userClickedPattern.length === gamePattern.length){

    setTimeout(function () {
      nextSequence();
    }, 1000);
    }

  } else {

    console.log("Failure");
    var soundWrong = new Audio("sounds/wrong.mp3");
    soundWrong.play();

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
    }
  };

//Reset the game

function startOver(){
  gamePattern=[];
  started = false;
  level = 0;
}

//Initiate next sequence
function nextSequence() {

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  animatePress(randomChosenColor);

};


//Add sound to the click
function playSound(name) {

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

};

//Add animation to click
function animatePress(currentColor) {

   $("#" + currentColor).addClass("pressed")

   setTimeout(function () {
     $("#" + currentColor).removeClass("pressed");
   }, 100);
};
