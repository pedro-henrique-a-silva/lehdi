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

document.addEventListener('keydown', (event) => {
  // Captura o código da tecla pressionada
  const keyCode = event.key;
  console.log('Tecla pressionada:', keyCode);
  const tecla = document.querySelector(`#tecla-${keyCode}`);
  if (tecla) {
    tecla.classList.toggle('active');
  }
  // Exibe o código da tecla no console
});

document.addEventListener('keyup', (event) => {
  // Captura o código da tecla pressionada
  const keyCode = event.key;
  const tecla = document.querySelector(`#tecla-${keyCode}`);
  if (tecla) {
    tecla.classList.toggle('active');
  }
  // Exibe o código da tecla no console
  console.log('Tecla Solta:', keyCode);
});

window.onload = () => {
  const { letterBoard } = data;

  creatLetterBoard(letterBoard.level1);
  renderKeyBoard();
};
