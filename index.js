var moves = ["rock", "paper", "scissors"];

var rockSrc = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/raised-fist_270a.png";
var paperSrc = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/raised-hand_270b.png";
var scissorSrc = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/victory-hand_270c.png";
var refreshSrc = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/black-universal-recycling-symbol_267b.png";
for (var i = 0; i < document.querySelectorAll(".move").length; i++) {
  document.querySelectorAll(".move")[i].addEventListener("click", function () {
    var playerMove = this.id;
    var computerMove = shoot();

    animate(playerMove);
    checkMoves(playerMove, computerMove);
  });
}

function shoot() {

  var rng = Math.floor(Math.random() * 3);

  switch (rng) {
    case 0:
      document.getElementById("answer").src = refreshSrc;
      setTimeout(function () {
        document.getElementById("answer").src = rockSrc;
    }, 100);
      break;
    case 1:
      document.getElementById("answer").src = refreshSrc;
      setTimeout(function () {
        document.getElementById("answer").src = paperSrc;
    }, 100);
      break;
    case 2:
      document.getElementById("answer").src = refreshSrc;
      setTimeout(function () {
        document.getElementById("answer").src = scissorSrc;
    }, 100);
      break;

  }

  return moves[rng];
}

function checkMoves(playerMove, computerMove) {
  if (playerMove === computerMove) {
    document.querySelector("h2").innerHTML = "Draw!";
  } else if (playerMove === "rock" && computerMove == "paper") {
    document.querySelector("h2").innerHTML = "Sentient A.I. wins!";
  } else if (playerMove === "rock" && computerMove == "scissors") {
    document.querySelector("h2").innerHTML = "You win!";
  } else if (playerMove === "paper" && computerMove == "rock") {
    document.querySelector("h2").innerHTML = "You win!";
  } else if (playerMove === "paper" && computerMove == "scissors") {
    document.querySelector("h2").innerHTML = "Sentient A.I. wins!";
  } else if (playerMove === "scissors" && computerMove == "rock") {
    document.querySelector("h2").innerHTML = "Sentient A.I. wins!";
  } else if (playerMove === "scissors" && computerMove == "paper") {
    document.querySelector("h2").innerHTML = "You win!";
  }
}

function animate(playerMove) {
  var activeMove = document.querySelector("." + playerMove);
  activeMove.classList.add("pressed");

  setTimeout(function () {
    activeMove.classList.remove("pressed");
  }, 100);
}
