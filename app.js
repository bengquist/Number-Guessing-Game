let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 2;
    
const game = document.getElementById('game'),
      minNum = document.getElementsByClassName('minNum')[0];
      maxNum = document.getElementsByClassName('maxNum')[0],
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input'),
      message = document.getElementsByClassName('message')[0];

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a value between ${min} and ${max}`, 'red');
  }else{
    if(guess === winningNum){

      guessInput.disabled = true;
      setMessage(`The winning number was ${guess}! Congratulations!`, 'green');

      guessBtn.value = 'Play Again!';
      guessBtn.className += 'play-again';
  
    }else{
  
      if(guessesLeft === 0){
        setMessage(`Game Over! The correct number was ${winningNum}`, 'red');

        guessInput.disabled = true;
        guessBtn.value = 'Play Again!';
        guessBtn.className += 'play-again';

      }else{
        guessesLeft--;

        setMessage(`${guess} is not correct, you have ${guessesLeft + 1} guess(es) left!`, 'red');
      }
  
    }
  }

});

function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
  guessInput.style.borderColor = color;
}

function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}