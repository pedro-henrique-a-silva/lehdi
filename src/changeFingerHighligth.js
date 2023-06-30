import { data } from './data';

const clearHighlight = () => {
  const rightHand = document.querySelector('#container-right-hand');
  const leftHand = document.querySelector('#container-left-hand');
  rightHand.className = 'status hand';
  leftHand.className = 'status hand';
};

const spaceTyped = () => {
  const rightHand = document.querySelector('#container-right-hand');
  const leftHand = document.querySelector('#container-left-hand');
  rightHand.className = 'status hand r-finger-pos finger-5';
  leftHand.className = 'status hand l-finger-pos finger-5';
};

const getLetterEl = () => {
  const letterTarget = document.querySelector('.active-letter');
  return letterTarget.getAttribute('data-letter');
};

const changeFingerHighLight = () => {
  const { fingerMap } = data;
  const key = getLetterEl();
  clearHighlight();
  // console.log('mapeando a key ', key);
  const fingerData = fingerMap.find(({ letterList }) => {
    return letterList.includes(key);
  });

  if (fingerData.finger === 'finger 5') {
    spaceTyped();
    return;
  }

  if (fingerData) {
    const handEl = document.querySelector(`#${fingerData.elementID}`);
    handEl.className = `status hand ${fingerData.class}`;
  }
};

export default changeFingerHighLight;
