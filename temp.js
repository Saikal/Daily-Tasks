function timer(i, time) {
  setTimeout(function() {
    console.log(i);
  }, time);
}

function timerSecs (secsTotal) {
  for(let i = secsTotal; i >= 1; i--) {
    // timer(i, 100 * i);
    setTimeout(function() {
      console.log(i);
    }, 1000*i);
  }
}

timerSecs(30);