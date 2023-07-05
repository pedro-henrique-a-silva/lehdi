import { errorCount, hitCount } from './utils';

const getNextElement = (activeElement) => {
  let nextLetterEl = activeElement.nextElementSibling;

  if (!nextLetterEl) {
    nextLetterEl = activeElement
      .parentElement
      .nextElementSibling
      .firstElementChild;
  }

  return nextLetterEl;
};

const changeLetterHighlight = (key) => {
  const letterTarget = document.querySelector('.active-letter');
  const letterTargetText = letterTarget.getAttribute('data-letter');
  const nextLetterEl = getNextElement(letterTarget);

  if (!nextLetterEl) throw new Error('Esta fase acabou');

  if (letterTargetText.toLowerCase() === key.toLowerCase()) {
    letterTarget.classList.remove('active-letter');
    letterTarget.classList.add('hit');
    nextLetterEl.classList.add('active-letter');
    hitCount();
  } else {
    errorCount();
  }
};

export default changeLetterHighlight;
