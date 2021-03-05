var activePlayer,
  currentScore,
  gamePlay = true;
var score;
// var customize = document.querySelector('.btn-customize')
document.querySelector(".btn-rules").addEventListener('click', function(){
  alert(`Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

  If the player rolls a 1, they score nothing and it becomes the next player's turn.
  If the player rolls any other number, it is added to their turn total and the player's turn continues.
  If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 wins. `)
})
init()

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlay) {
    // customize.style.display = 'none';
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
  if (score[activePlayer] >= 100) {
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
  // customize.style.display = 'block';
}

