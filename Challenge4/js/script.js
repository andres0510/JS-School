/* eslint-env jquery */
/* eslint-disable no-invalid-this */
/* global document window Audio*/

$('.sound-button').click(function detectKeyPressed() {
  const element = $(this);
  element.toggleClass('active');
  setTimeout(() => {
    element.toggleClass('active');
  }, 100);
  const reproducir = new Audio();
  reproducir.src = `./sound/sound-${$(this).data('keyPressed')}.mp3`;
  reproducir.play();
});

/**
 * @param {event} event key pressed from keyboard
 */
function keyPressed(event) {
  const keyP = String.fromCharCode(event.keyCode).toUpperCase();
  if (keyP.length > 0 && keyP.match(/[A-Z]/i)) {
    $(`.button-${keyP}`).click();
  }
}

window.onload = function buttonActive() {
  document.onkeypress = keyPressed;
};