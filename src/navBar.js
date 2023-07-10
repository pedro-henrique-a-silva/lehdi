import Swal from 'sweetalert2';
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
    Swal.fire({
      title: 'Atenção!',
      text: error.message,
      icon: 'info',
      confirmButtonText: 'ok',
    });
  }
};

export const changeToPreviousLevel = () => {
  try {
    const prevuousLevelInfo = getPreviousLevelInfo();
    creatLetterBoard(prevuousLevelInfo);
  } catch (error) {
    Swal.fire({
      title: 'Atenção!',
      text: error.message,
      icon: 'info',
      confirmButtonText: 'ok',
    });
  }
};

export const reloadLevel = () => {
  const currentLevelInfo = getCurrentLevelInfo();
  creatLetterBoard(currentLevelInfo);
};
