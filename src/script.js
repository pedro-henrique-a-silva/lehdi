import './style/hand.css';
import './style/keyboard.css';
import './style/letterBoard.css';
import './style/navPhase.css';
import './style/statusTyping.css';
import './style/style.css';
import { data } from './data';
import { creatLetterBoard, updateLetterBoard } from './createLetterBoard';
import { renderKeyBoard } from './createKeyboard';
import changeFingerHighLight from './changeFingerHighligth';
import changeLetterHighlight from './changeLetterHighlight';
import { setPhaseValue } from './utils';

document.addEventListener('keydown', (event) => {
  const keyCode = event.key.replace(' ', 'space');
  const tecla = document.querySelector(`#tecla-${keyCode}`);

  if (tecla) {
    tecla.classList.toggle('active-key');
    try {
      changeLetterHighlight(keyCode);
    } catch (error) {
      updateLetterBoard(data.letterBoardLevels);
    }

    changeFingerHighLight();
  }
});

document.addEventListener('keyup', (event) => {
  const keyCode = event.key.replace(' ', 'space');
  const tecla = document.querySelector(`#tecla-${keyCode}`);
  if (tecla) {
    tecla.classList.toggle('active-key');
  }
});

window.onload = () => {
  const { letterBoardLevels } = data;
  const level = letterBoardLevels[0];
  creatLetterBoard(level);
  renderKeyBoard();
  setPhaseValue(level.id);
  changeFingerHighLight();
};
