import { data } from './data';

const dataError = 'data-error';
const dataHit = 'data-hit';

export const setLevelValue = (levelId) => {
  const levelEL = document.querySelector('.level');
  levelEL.innerHTML = `Fase: ${levelId}`;
  levelEL.setAttribute('data-level', levelId);
};

export const getLevelValue = () => {
  const phaseEl = document.querySelector('.level');

  return Number(phaseEl.getAttribute('data-level'));
};

export const getNextLevelInfo = () => {
  const currentLevel = getLevelValue();
  const nextLevel = data.letterBoardLevels[(currentLevel + 1) - 1];
  return nextLevel;
};

export const getPreviousLevelInfo = () => {
  const currentLevel = getLevelValue();
  const previousLevel = data.letterBoardLevels[(currentLevel - 1) - 1];

  return previousLevel;
};

export const getCurrentLevelInfo = () => {
  const currentLevel = getLevelValue();

  const currentLevelInfo = data.letterBoardLevels[currentLevel - 1];

  return currentLevelInfo;
};

export const errorCount = () => {
  const errorCountEL = document.querySelector('#errorCount');
  const currentCount = Number(errorCountEL.getAttribute(dataError));
  const newCount = currentCount + 1;
  errorCountEL.innerHTML = `${newCount}`;
  errorCountEL.setAttribute(dataError, newCount);
};

export const hitCount = () => {
  const hitCountEL = document.querySelector('#hitCount');
  const currentCount = Number(hitCountEL.getAttribute(dataHit));
  const newCount = currentCount + 1;
  hitCountEL.innerHTML = `${newCount}`;
  hitCountEL.setAttribute(dataHit, newCount);
};

export const resetCount = () => {
  const hitCountEL = document.querySelector('#hitCount');
  const errorCountEL = document.querySelector('#errorCount');

  hitCountEL.innerHTML = '0';
  hitCountEL.setAttribute(dataHit, 0);

  errorCountEL.innerHTML = '0';
  errorCountEL.setAttribute(dataError, 0);
};
