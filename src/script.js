import './style/hand.css';
import './style/keyboard.css';
import './style/letterBoard.css';
import './style/navLevel.css';
import './style/statusTyping.css';
import './style/style.css';
// import { data } from './data';
import letterBoardLevels from './letterBoardData';
import { creatLetterBoard } from './createLetterBoard';
import { renderKeyBoard } from './createKeyboard';
import changeFingerHighLight from './changeFingerHighligth';
import changeLetterHighlight from './changeLetterHighlight';
import {
  btnNextInstruction,
  btnCloseInstruction,
  openInstruction,
  nameOfKey } from './utils';
import { changeToNextLevel, changeToPreviousLevel, reloadLevel } from './navBar';

document.querySelector('#previous-button')
  .addEventListener('click', changeToPreviousLevel);

document.querySelector('#next-button')
  .addEventListener('click', changeToNextLevel);

document.querySelector('#reload-button')
  .addEventListener('click', reloadLevel);

document.querySelector('.btn-instruction-next')
  .addEventListener('click', btnNextInstruction);

document.querySelector('.btn-instruction-close')
  .addEventListener('click', btnCloseInstruction);

document.querySelector('#instrucao')
  .addEventListener('click', openInstruction);

document.addEventListener('keydown', (event) => {
  const keyCode = nameOfKey(event.key);

  const tecla = document.querySelector(`#tecla-${keyCode}`);
  console.log(keyCode);
  if (tecla) {
    tecla.classList.toggle('active-key');
    try {
      changeLetterHighlight(keyCode);
    } catch (error) {
      changeToNextLevel();
    }

    changeFingerHighLight();
  }
});

document.addEventListener('keyup', (event) => {
  const keyCode = event.key.replace(' ', 'space');
  const tecla = document.querySelector(`#tecla-${nameOfKey(keyCode)}`);
  if (tecla) {
    tecla.classList.toggle('active-key');
  }
});

window.onload = () => {
  const level = letterBoardLevels[0];
  creatLetterBoard(level);
  renderKeyBoard();
};
