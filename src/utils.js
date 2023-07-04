import { data } from './data';

export const setLevelValue = (levelId) => {
  const phaseEL = document.querySelector('.level');
  phaseEL.innerHTML = `Fase: ${levelId}`;
  phaseEL.setAttribute('data-level', levelId);
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
