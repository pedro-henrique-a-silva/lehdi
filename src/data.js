const CLASS_KEY = 'key';
const CLASS_BUTTON_DISABLED = 'button-disabled';
const LEFT_ELEMENT_ID = 'container-left-hand';
const RIGHT_ELEMENT_ID = 'container-right-hand';
const WORD_LEVEL_07 = 'açsldkfjgh';
const WORD_LEVEL_08 = 'ghfjdkslaç';

export const data = {
  letterBoardLevels: [
    {
      id: 1,
      letterRow: ['asdfg', 'asdfg', 'asdfg', 'asdfg', 'asdfg', 'asdfg'],
      letterLines: 5,
    },
    {
      id: 2,
      letterRow: ['gfdsa', 'gfdsa', 'gfdsa', 'gfdsa', 'gfdsa', 'gfdsa'],
      letterLines: 5,
    },
    {
      id: 3,
      letterRow: ['hjklç', 'hjklç', 'hjklç', 'hjklç', 'hjklç', 'hjklç'],
      letterLines: 5,
    },
    {
      id: 4,
      letterRow: ['çlkjh', 'çlkjh', 'çlkjh', 'çlkjh', 'çlkjh', 'çlkjh'],
      letterLines: 5,
    },
    {
      id: 5,
      letterRow: ['asdfg', 'hjklç', 'asdfg', 'hjklç', 'asdfg', 'hjklç'],
      letterLines: 5,
    },
    {
      id: 6,
      letterRow: ['çlkjh', 'gfdsa', 'çlkjh', 'gfdsa', 'çlkjh', 'gfdsa'],
      letterLines: 5,
    },
    {
      id: 7,
      letterRow: [WORD_LEVEL_07, WORD_LEVEL_07, WORD_LEVEL_07, WORD_LEVEL_07],
      letterLines: 5,
    },
    {
      id: 8,
      letterRow: [WORD_LEVEL_08, WORD_LEVEL_08, WORD_LEVEL_08, WORD_LEVEL_08],
      letterLines: 5,
    },
    {
      id: 9,
      letterRow: ['aç', 'sl', 'dk', 'fj', 'gh', 'aç', 'sl', 'dk', 'fj', 'gh'],
      letterLines: 5,
    },
  ],
  keyboard: [
    [
      { tecla: '\'', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '1', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '2', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '3', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '4', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '5', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '6', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '7', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '8', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '9', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '0', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '-', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '=', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: 'Backspace',
        class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED} key-backspace` },
    ],
    [
      { tecla: 'Tab', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: 'q', class: `${CLASS_KEY}` },
      { tecla: 'w', class: `${CLASS_KEY}` },
      { tecla: 'e', class: `${CLASS_KEY}` },
      { tecla: 'r', class: `${CLASS_KEY}` },
      { tecla: 't', class: `${CLASS_KEY}` },
      { tecla: 'y', class: `${CLASS_KEY}` },
      { tecla: 'u', class: `${CLASS_KEY}` },
      { tecla: 'i', class: `${CLASS_KEY}` },
      { tecla: 'o', class: `${CLASS_KEY}` },
      { tecla: 'p', class: `${CLASS_KEY}` },
      { tecla: '´', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '[', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: 'Enter', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED} key-enter` },
    ],
    [
      { tecla: 'CapsLock', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED} key-capslock` },
      { tecla: 'a', class: `${CLASS_KEY}` },
      { tecla: 's', class: `${CLASS_KEY}` },
      { tecla: 'd', class: `${CLASS_KEY}` },
      { tecla: 'f', class: `${CLASS_KEY}` },
      { tecla: 'g', class: `${CLASS_KEY}` },
      { tecla: 'h', class: `${CLASS_KEY}` },
      { tecla: 'j', class: `${CLASS_KEY}` },
      { tecla: 'k', class: `${CLASS_KEY}` },
      { tecla: 'l', class: `${CLASS_KEY}` },
      { tecla: 'ç', class: `${CLASS_KEY}` },
      { tecla: '~', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '&#8262;', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
    ],
    [
      { tecla: 'Shift', class: `${CLASS_KEY} key-l-shift` },
      { tecla: 'z', class: `${CLASS_KEY}` },
      { tecla: 'x', class: `${CLASS_KEY}` },
      { tecla: 'c', class: `${CLASS_KEY}` },
      { tecla: 'v', class: `${CLASS_KEY}` },
      { tecla: 'b', class: `${CLASS_KEY}` },
      { tecla: 'n', class: `${CLASS_KEY}` },
      { tecla: 'm', class: `${CLASS_KEY}` },
      { tecla: ',', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '.', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: ';', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: '/', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED}` },
      { tecla: 'Shift', class: `${CLASS_KEY} key-r-shift` },
    ],
    [
      { tecla: 'Control', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED} key-l-ctrl` },
      { tecla: 'Alt', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED} key-alt` },
      { tecla: 'space', class: `${CLASS_KEY} key-space` },
      { tecla: 'AltGraph', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED} key-altgr` },
      { tecla: 'Control', class: `${CLASS_KEY} ${CLASS_BUTTON_DISABLED} key-r-ctrl` },
    ],
  ],
  fingerMap: [
    {
      elementID: LEFT_ELEMENT_ID,
      letterList: ['z', 'a', 'q', '1'],
      finger: 'finger 1',
      class: 'l-finger-pos finger-1',
    },
    {
      elementID: LEFT_ELEMENT_ID,
      letterList: ['x', 's', 'w', '2'],
      finger: 'finger 2',
      class: 'l-finger-pos finger-2',
    },
    {
      elementID: LEFT_ELEMENT_ID,
      letterList: ['c', 'd', 'e', '3'],
      finger: 'finger 3',
      class: 'l-finger-pos finger-3',
    },
    {
      elementID: LEFT_ELEMENT_ID,
      letterList: ['v', 'f', 'r', '4', 'b', 'g', 't', '5'],
      finger: 'finger 4',
      class: 'l-finger-pos finger-4',
    },
    {
      letterList: [' ', 'space'],
      finger: 'finger 5',
      class: 'l-finger-pos finger-5',
    },
    {
      elementID: RIGHT_ELEMENT_ID,
      letterList: ['n', 'h', 'y', '6', 'm', 'j', 'u', '7'],
      finger: 'finger 4',
      class: 'r-finger-pos finger-4',
    },
    {
      elementID: RIGHT_ELEMENT_ID,
      letterList: [',', 'k', 'i', '8'],
      finger: 'finger 3',
      class: 'r-finger-pos finger-3',
    },
    {
      elementID: RIGHT_ELEMENT_ID,
      letterList: ['.', 'l', 'o', '9'],
      finger: 'finger 2',
      class: 'r-finger-pos finger-2',
    },
    {
      elementID: RIGHT_ELEMENT_ID,
      letterList: [';', 'ç', 'p', '0'],
      finger: 'finger 1',
      class: 'r-finger-pos finger-1',
    },

  ],
};
