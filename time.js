//import $ from 'jquery'

var time = 0;
var timerRunning = false;
var xTime = 1;
var timecap = 99999999999999999999999; // makes sure the numbers doent go for to long when a sleep error occurs
textUpdate()


$("#b1")
  .html('End')
  .on('click', () => counter(false) + textUpdate() + console.log('Count Paused:' + timerRunning))
$("#b2")
  .html('Start')
  .on('click', () => counter(true) + textUpdate() + console.log('Count Started:' + timerRunning))
$("#b3")
  .html('Restart')
 .on('click', () => console.log('Count Restarted.') + timeSet(1) + textUpdate())
$("#b4")
  .html('+'+ xTime)
  .on('click', () => timeSet(2) + textUpdate())
$("#b5")
  .html('-'+ xTime)
  .on('click', () => timeSet(3) + textUpdate())
$("#b6")
  .html('Change Multiplier: '+ xTime)
  .on('click', () => timeMulti())
  
setInterval(timer, 1000)


function timeMulti() {
  if (xTime == 1 || xTime == 10) {
    xTime = xTime * 10
  } else if (xTime == 100) {
    xTime = 1
  }
  console.log(' Multi: ' + xTime)
  $("#b5")
    .html('-' + xTime)
  $("#b4")
    .html('+' + xTime)
  $("#b6")
    .html('Change Multiplier: ' + xTime)
}
async function timeSet(operation) {
  if (operation === 1) {
    time = 0 && timerRunning == false
  }
  if (operation === 2) {
    time = time + xTime
  }
  if (operation === 3) {
    time = time - xTime
  }
}

function textUpdate() {
  $("time").text('Time: ' + time);
  $("timerRunning").text('timerRunning: ' + timerRunning);
}

function counter(value) {
  timerRunning = value
}

function timer() {
  if (timerRunning === true) {
    if (time < timecap) {
      time++
      console.log(time)
      textUpdate();
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
