import './style/hand.css';
import './style/keyboard.css';
import './style/letterBoard.css';
import './style/navPhase.css';
import './style/statusTyping.css';
import './style/style.css';
import { data } from './data';
// import creatLetterBoard from './createLetterBoard';
import { creatLetterBoard } from './createLetterBoard';
import { renderKeyBoard } from './createKeyboard';
import changeFingerHighLight from './changeFingerHighligth';
import changeLetterHighlight from './changeLetterHighlight';

document.addEventListener('keydown', (event) => {
  // Captura o código da tecla pressionada
  const keyCode = event.key.replace(' ', 'space');
  console.log(`Tecla pressionada:${keyCode}tecla`);
  const tecla = document.querySelector(`#tecla-${keyCode}`);

  if (tecla) {
    tecla.classList.toggle('active-key');
    changeLetterHighlight(keyCode);

    changeFingerHighLight();
  }
});

document.addEventListener('keyup', (event) => {
  // Captura o código da tecla pressionada
  const keyCode = event.key.replace(' ', 'space');
  const tecla = document.querySelector(`#tecla-${keyCode}`);
  if (tecla) {
    tecla.classList.toggle('active-key');
  }
});

window.onload = () => {
  const { letterBoard } = data;
  creatLetterBoard(letterBoard.level2);
  renderKeyBoard();

  changeFingerHighLight();
};
