console.log('Hello1');
var activePlayer, currentScore, gamePlay = true; 
var score;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlay){
        console.log("hello");
    
    var randNum = Math.floor(Math.random() * 6 +1);
    console.log(randNum);
    diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + randNum + '.png';
    if(randNum != 1){
        currentScore += randNum;
        document.getElementById('current-' + activePlayer).textContent = currentScore;
    }
    else{
        nextPlayer();
    }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlay){
    
        nextPlayer();
    }
    });



document.querySelector('.btn-new').addEventListener('click', function(){
    init();
    gamePlay = true
})







function nextPlayer(){
    score[activePlayer] += currentScore
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    if (score[activePlayer]>=100){
        document.getElementById('name-' + activePlayer).textContent = 'Winner';
        gamePlay = false;
        document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }
    else{
    activePlayer === 1 ? activePlayer = 0 : activePlayer =1;
    currentScore = 0
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    }
}



function init(){
    currentScore = 0
    activePlayer = 0
    score = [0, 0]
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    }