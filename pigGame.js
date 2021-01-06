var activePlayer,
  currentScore,
  gamePlay = true;
var score;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlay) {
    var randNum1 = Math.floor(Math.random() * 6 + 1);
    var randNum2 = Math.floor(Math.random() * 6 + 1);
    diceDom1 = document.querySelector(".dice1");
    diceDom1.style.display = "block";
    diceDom1.src = "dice-" + randNum1 + ".png";
    diceDom2 = document.querySelector(".dice2");
    diceDom2.style.display = "block";
    diceDom2.src = "dice-" + randNum2 + ".png";
    if (randNum1 !== 1 && randNum2 !== 1) {
      currentScore += randNum1;
      currentScore += randNum2;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = currentScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlay) {
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", function () {
  init();
  gamePlay = true;
});

function nextPlayer() {
  score[activePlayer] += currentScore;
  document.getElementById("score-" + activePlayer).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 50) {
    document.getElementById("name-" + activePlayer).textContent = "Winner";
    gamePlay = false;
    document.querySelector(".dice1").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
    currentScore = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
  }
}

function init() {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.querySelector(".dice1").style.display = "none";
  document.querySelector(".dice2").style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  final_score = document.querySelector(".final_score").textContent;
  console.log(final_score);
}
