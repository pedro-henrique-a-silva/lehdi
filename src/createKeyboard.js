import { data } from './data';

const getKeyboardRowElement = (keyboardRowData) => {
  const keyboardRowEl = document.createElement('div');
  keyboardRowEl.className = 'keyboard-row';

  return keyboardRowData.map((key) => {
    const btnKeyboard = document.createElement('button');
    btnKeyboard.id = `tecla-${key.tecla}`;
    btnKeyboard.innerHTML = key.tecla;
    btnKeyboard.className = key.class;
    return btnKeyboard;
  })
    .reduce((keyboardRowAcc, btnkeyboardEl) => {
      keyboardRowAcc.appendChild(btnkeyboardEl);
      return keyboardRowAcc;
    }, keyboardRowEl);
};

export const renderKeyBoard = () => {
  const { keyboard } = data;
  const keyboardSection = document.querySelector('.Keyboard-section');

  keyboard.map((keyboardRowData) => getKeyboardRowElement(keyboardRowData))
    .reduce((keyboardAcc, keyboardRow) => {
      keyboardAcc.appendChild(keyboardRow);
      return keyboardAcc;
    }, keyboardSection);
};
