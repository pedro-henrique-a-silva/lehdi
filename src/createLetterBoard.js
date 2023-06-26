const createLetterGroupEl = (arrayOfLetter) => {
  const spanLetterGroup = document.createElement('span');
  spanLetterGroup.classList.add('letter-group');

  return arrayOfLetter.map((letter) => {
    const letterEl = document.createElement('span');
    letterEl.classList.add('letter');
    letterEl.innerHTML = letter;
    return letterEl;
  })
    .reduce((letterGroupEL, letterEl) => {
      letterGroupEL.appendChild(letterEl);
      return letterGroupEL;
    }, spanLetterGroup);
};

const createletterRowEl = (arrayOfWord) => {
  const paragraphLetterRow = document.createElement('p');
  paragraphLetterRow.classList.add('letter-row');

  return arrayOfWord.map((word) => createLetterGroupEl(word.split('')))
    .reduce((rowEL, wordEl) => {
      rowEL.appendChild(wordEl);
      return rowEL;
    }, paragraphLetterRow);
};

export const creatLetterBoard = (levelInfo) => {
  const { letterRow, letterLines } = levelInfo;
  const letterContainer = document.querySelector('.letter-container');
  letterContainer.innerHTML = '';

  for (let line = 0; line < letterLines; line += 1) {
    const letterRowEl = createletterRowEl(letterRow);
    letterContainer.appendChild(letterRowEl);
  }
};
