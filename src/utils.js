import { data } from './data';

const dataError = 'data-error';
const dataHit = 'data-hit';

const getInfo = (levelId) => data.letterBoardLevels
  .find((level) => levelId === level.id);

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
  const nextLevel = getInfo((currentLevel + 1));
  return nextLevel;
};

export const getPreviousLevelInfo = () => {
  const currentLevel = getLevelValue();
  const previousLevel = getInfo((currentLevel - 1));

  return previousLevel;
};

export const getCurrentLevelInfo = () => {
  const currentLevel = getLevelValue();

  const currentLevelInfo = getInfo(currentLevel);

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

export const btnNextInstruction = () => {
  const instruction1 = document.querySelector('.instruction-article1');
  const instruction2 = document.querySelector('.instruction-article2');

  instruction1.style.display = 'none';
  instruction2.style.display = 'block';
};

export const btnCloseInstruction = () => {
  const instructionsContainer = document.querySelector('.instruction-container');

  instructionsContainer.style.display = 'none';
};

export const openInstruction = () => {
  const instructionsContainer = document.querySelector('.instruction-container');

  instructionsContainer.style.display = 'block';
};
