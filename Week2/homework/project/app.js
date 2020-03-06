'use strict'

var x = 25;
Time = document.getElementById('time');
Time.innerHTML = x;

var plus = document.getElementById('plus');
plus.onclick = function(){
    x++;
  if( x > 60){x = 60};
  Time.innerHTML = x;
  timer.innerHTML = x+":00";
};

 var minus = document.getElementById('minus');
minus.onclick = function(){
  x--;
  if( x < 1){x = 1};
  Time.innerHTML = x;
  timer.innerHTML = x+":00";
};

pause = document.getElementById('pause');
pause.onclick = function(){
    clearInterval(intervalCounter);
}

play = document.getElementById('start');
play.onclick = function(){

  var sessionLength = x;
  var timeLeft = sessionLength*60;

  getFromatedTime = function(timeLeft){
    m = Math.floor(timeLeft/60);
    s = timeLeft-m*60;
    if(m<10){m="0"+m};
    if(s<10){s="0"+s};
    return m + ':'  + s;
  };

  startPomodoro = function(){
    intervalCounter = setInterval(function(){

      if(timeLeft>0){
        timeLeft--;
        timer.innerHTML = getFromatedTime(timeLeft);
      }
      else if (timeLeft == 0) {
          clearInterval();
          x = 25;
          Time.innerHTML = x;
          timer.innerHTML = x+":00";

      }
  }, 1000)};
  startPomodoro();
};