import { setLevelValue, resetCount } from './utils';
import changeFingerHighLight from './changeFingerHighligth';

const createLetterGroupEl = (arrayOfLetter) => {
  const spanLetterGroup = document.createElement('span');
  spanLetterGroup.classList.add('letter-group');

  return arrayOfLetter.map((letter) => {
    const letterEl = document.createElement('span');
    letterEl.classList.add('letter');
    letterEl.innerHTML = letter;
    letterEl.setAttribute('data-letter', letter);
    return letterEl;
  })
    .reduce((letterGroupEL, letterEl) => {
      letterGroupEL += letterEl.outerHTML;
      return letterGroupEL;
    }, '');
};

const createletterRowEl = (arrayOfWord, rowID) => {
  const paragraphLetterRow = document.createElement('p');
  paragraphLetterRow.id = `row-${rowID}`;
  paragraphLetterRow.classList.add('letter-row');

  return arrayOfWord.map((word) => createLetterGroupEl(word.split('')))
    .reduce((rowEL, wordEl) => {
      const letterSpace = document.createElement('span');
      letterSpace.classList.add('letter');
      letterSpace.innerHTML = ' ';
      letterSpace.setAttribute('data-letter', 'space');

      rowEL.innerHTML += wordEl;
      rowEL.innerHTML += letterSpace.outerHTML;
      return rowEL;
    }, paragraphLetterRow);
};

export const creatLetterBoard = (levelInfo) => {
  const { id, letterRow, letterLines } = levelInfo;
  const letterContainer = document.querySelector('.letter-container');
  letterContainer.innerHTML = '';

  for (let line = 0; line < letterLines; line += 1) {
    const letterRowEl = createletterRowEl(letterRow, (line + 1));
    letterContainer.appendChild(letterRowEl);
  }

  letterContainer
    .firstElementChild
    .firstElementChild.classList.add('active-letter');

  setLevelValue(id);
  changeFingerHighLight();
  resetCount();
};
