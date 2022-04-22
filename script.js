var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes;
var wrongSeq = false; // a flag needed to treat any number of mistakes in one sequence as one mistake
var time; // variable for the ID returned by setInterval
var timeLeft; // variable to display the time left on the screen

function setPattern() {
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 6) + 1;
  }
}

function startGame() {
  //initialize game variables
  setPattern();
  mistakes = 2;
  progress = 0;
  gamePlaying = true;
  timeLeft = 10;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("mistakes").innerHTML = `Mistakes: ${mistakes+1} available`;
  playClueSequence();
}
function stopGame() {
  //initialize game variables
  gamePlaying = false;
  wrongSeq = false;
  clueHoldTime = 1000;
  mistakes = 2;
  clearInterval(time);
  document.getElementById("timer").innerHTML = "";
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("mistakes").innerHTML = "";
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 261.6,
  3: 329.6,
  4: 392,
  5: 466.2,
  6: 550,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function decreaseTime() {
  document.getElementById("timer").innerHTML = `Time Left: ${timeLeft} seconds`;
  if (mistakes < 0) {
    loseGame();
  }
  if (timeLeft == 0) {
    mistakes -= 1;
    clearInterval(time);
    guessCounter += 1;
    progress += 1;
    playClueSequence();
  } else {
    timeLeft -= 1;
  }
}

function playClueSequence() {
  context.resume();
  timeLeft = 10;
  clearInterval(time);
  guessCounter = 0;
  document.getElementById("mistakes").innerHTML = `Mistakes: ${mistakes+1} available`;
  let delay = nextClueWaitTime; //set delay to initial wait time
  let trigger = false;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime *= 0.97;
    delay += clueHoldTime;
    delay += cluePauseTime;
    if (i == progress) {
      trigger = true;
    }
  }
  if (trigger) {
    time = setInterval(decreaseTime, 1000);
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  if (btn == pattern[guessCounter] && !wrongSeq) {
    // guess is correct
    if (guessCounter == progress) {
      // turn is over
      if (progress == pattern.length - 1) {
        // it is the last turn
        winGame();
      } else {
        // it is not the last turn
        progress += 1;
        playClueSequence();
      }
    } else {
      // turn is not over yet
      guessCounter += 1;
    }
  } else {
    // guess is wrong
    wrongSeq = true;
    if (guessCounter == progress) {
      // at the final sound/color of the sequence is done, and the sequence has one or more mistakes
      progress += 1;
      mistakes -= 1;
      wrongSeq = false;
      playClueSequence();
    } else {
      // the sequence is not t it final sound/color, but has mistakes
      if (mistakes <= 0) {// the player didn't get 3 sequences correctly, he/she loses
        loseGame();
      }
      guessCounter += 1; // the player got less than three sequences wrong, game continues
    }
  }
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

