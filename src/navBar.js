import {
  getCurrentLevelInfo,
  getNextLevelInfo,
  getPreviousLevelInfo,

} from './utils';
import { creatLetterBoard } from './createLetterBoard';

export const changeToNextLevel = () => {
  const nextLevelInfo = getNextLevelInfo();
  creatLetterBoard(nextLevelInfo);
};

export const changeToPreviousLevel = () => {
  const prevuousLevelInfo = getPreviousLevelInfo();
  creatLetterBoard(prevuousLevelInfo);
};

export const reloadLevel = () => {
  const currentLevelInfo = getCurrentLevelInfo();
  creatLetterBoard(currentLevelInfo);
};
