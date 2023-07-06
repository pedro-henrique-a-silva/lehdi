import {
  getCurrentLevelInfo,
  getNextLevelInfo,
  getPreviousLevelInfo,

} from './utils';
import { creatLetterBoard } from './createLetterBoard';

export const changeToNextLevel = () => {
  try {
    const nextLevelInfo = getNextLevelInfo();
    creatLetterBoard(nextLevelInfo);
  } catch (error) {
    console.log(error.message);
  }
};

export const changeToPreviousLevel = () => {
  try {
    const prevuousLevelInfo = getPreviousLevelInfo();
    creatLetterBoard(prevuousLevelInfo);
  } catch (error) {
    console.log(error.message);
  }
};

export const reloadLevel = () => {
  const currentLevelInfo = getCurrentLevelInfo();
  creatLetterBoard(currentLevelInfo);
};
