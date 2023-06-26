import './style/hand.css';
import './style/keyboard.css';
import './style/letterBoard.css';
import './style/navPhase.css';
import './style/statusTyping.css';
import './style/style.css';
import { letterBoard } from './data';
// import creatLetterBoard from './createLetterBoard';
import { creatLetterBoard } from './createLetterBoard';

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

// const letterboard = document.querySelector('.letter-container');
// console.log(letterBoard.Fase1[0].split(''));
// const arrayOfLetterEl = createLettersGroup(letterBoard.Fase1[0].split(''));

// const qtdLines = 5;
// for (let line = 0; line < qtdLines; line += 1) {
//   const paragraphLine = document.createElement('p');
//   paragraphLine.classList.add('letter-row');
// }
creatLetterBoard(letterBoard.level2);
// console.log(createletterRowEl(letterBoard.Fase1.letterRow));
// creatLetterBoard(letterBoard.Fase1);createWordsLine
