/* global document */
const contador = 0;
let finContador = 300;
let id;
let sec;
let min;

/**
 * countdown function
 */
function countDown() {
  min = Math.floor(finContador / 60);
  sec = Math.floor(finContador % 60);
  if (sec <= 9) {
    sec = '0' + sec;
  }
  document.getElementById('count').innerHTML = `${min}:${sec}`;
  if (contador >= finContador) {
    clearInterval(id);
  }
  finContador -= 1;
}

/**
 * start
 */
function ini() {
  countDown();
  if (finContador > 0) {
    id = setInterval('countDown()', 1000);
  }
}

ini();