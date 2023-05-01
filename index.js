const switchCase = 'text';
const keyboardLang = (localStorage.getItem('lang') !== null) ? localStorage.getItem('lang') : 'ru';
const keysArr = [
  {
    text: {
      en: '`',
      ru: 'ё',
    },
    shiftText: {
      en: '~',
      ru: 'Ё',
    },
    code: 'Backquote',
  },
  {
    text: {
      en: '1',
      ru: '1',
    },
    shiftText: {
      en: '!',
      ru: '!',
    },
    code: 'Digit1',
  },
  {
    text: {
      en: '2',
      ru: '2',
    },
    shiftText: {
      en: '@',
      ru: '"',
    },
    code: 'Digit2',
  },
  {
    text: {
      en: '3',
      ru: '3',
    },
    shiftText: {
      en: '#',
      ru: '№',
    },
    code: 'Digit3',
  },
  {
    text: {
      en: '4',
      ru: '4',
    },
    shiftText: {
      en: '$',
      ru: ';',
    },
    code: 'Digit4',
  },
  {
    text: {
      en: '5',
      ru: '5',
    },
    shiftText: {
      en: '%',
      ru: '%',
    },
    code: 'Digit5',
  },
  {
    text: {
      en: '6',
      ru: '6',
    },
    shiftText: {
      en: '^',
      ru: ':',
    },
    code: 'Digit6',
  },
  {
    text: {
      en: '7',
      ru: '7',
    },
    shiftText: {
      en: '&',
      ru: '?',
    },
    code: 'Digit7',
  },
  {
    text: {
      en: '8',
      ru: '8',
    },
    shiftText: {
      en: '*',
      ru: '*',
    },
    code: 'Digit8',
  },
  {
    text: {
      en: '9',
      ru: '9',
    },
    shiftText: {
      en: '(',
      ru: '(',
    },
    code: 'Digit9',
  },
  {
    text: {
      en: '0',
      ru: '0',
    },
    shiftText: {
      en: ')',
      ru: ')',
    },
    code: 'Digit0',
  },
  {
    text: {
      en: '-',
      ru: '-',
    },
    shiftText: {
      en: '_',
      ru: '_',
    },
    code: 'Minus',
  },
  {
    text: {
      en: '=',
      ru: '=',
    },
    shiftText: {
      en: '+',
      ru: '+',
    },
    code: 'Equal',
  },
  {
    text: {
      en: 'Backspace',
      ru: 'Backspace',
    },
    shiftText: {
      en: 'Backspace',
      ru: 'Backspace',
    },
    code: 'Backspace',
  },
  {
    text: {
      en: 'Tab',
      ru: 'Tab',
    },
    shiftText: {
      en: 'Tab',
      ru: 'Tab',
    },
    code: 'Tab',
  },
  {
    text: {
      en: 'q',
      ru: 'й',
    },
    shiftText: {
      en: 'Q',
      ru: 'Й',
    },
    code: 'KeyQ',
  },
  {
    text: {
      en: 'w',
      ru: 'ц',
    },
    shiftText: {
      en: 'W',
      ru: 'Ц',
    },
    code: 'KeyW',
  },
  {
    text: {
      en: 'e',
      ru: 'у',
    },
    shiftText: {
      en: 'E',
      ru: 'У',
    },
    code: 'KeyE',
  },
  {
    text: {
      en: 'r',
      ru: 'к',
    },
    shiftText: {
      en: 'R',
      ru: 'К',
    },
    code: 'KeyR',
  },
  {
    text: {
      en: 't',
      ru: 'е',
    },
    shiftText: {
      en: 'T',
      ru: 'Е',
    },
    code: 'KeyT',
  },
  {
    text: {
      en: 'y',
      ru: 'н',
    },
    shiftText: {
      en: 'Y',
      ru: 'Н',
    },
    code: 'KeyY',
  },
  {
    text: {
      en: 'u',
      ru: 'г',
    },
    shiftText: {
      en: 'U',
      ru: 'Г',
    },
    code: 'KeyU',
  },
  {
    text: {
      en: 'i',
      ru: 'ш',
    },
    shiftText: {
      en: 'I',
      ru: 'Ш',
    },
    code: 'KeyI',
  },
  {
    text: {
      en: 'o',
      ru: 'щ',
    },
    shiftText: {
      en: 'O',
      ru: 'Щ',
    },
    code: 'KeyO',
  },
  {
    text: {
      en: 'p',
      ru: 'з',
    },
    shiftText: {
      en: 'P',
      ru: 'З',
    },
    code: 'KeyP',
  },
  {
    text: {
      en: '[',
      ru: 'х',
    },
    shiftText: {
      en: '{',
      ru: 'Х',
    },
    code: 'BracketLeft',
  },
  {
    text: {
      en: ']',
      ru: 'ъ',
    },
    shiftText: {
      en: '}',
      ru: 'Ъ',
    },
    code: 'BracketRight',
  },
  {
    text: {
      en: '\\',
      ru: '\\',
    },
    shiftText: {
      en: '|',
      ru: '/',
    },
    code: 'Backslash',
  },
  {
    text: {
      en: 'Del',
      ru: 'Del',
    },
    shiftText: {
      en: 'Del',
      ru: 'Del',
    },
    code: 'Delete',
  },
  {
    text: {
      en: 'CapsLock',
      ru: 'CapsLock',
    },
    shiftText: {
      en: 'CapsLock',
      ru: 'CapsLock',
    },
    code: 'CapsLock',
  },
  {
    text: {
      en: 'a',
      ru: 'ф',
    },
    shiftText: {
      en: 'A',
      ru: 'Ф',
    },
    code: 'KeyA',
  },
  {
    text: {
      en: 's',
      ru: 'ы',
    },
    shiftText: {
      en: 'S',
      ru: 'Ы',
    },
    code: 'KeyS',
  },
  {
    text: {
      en: 'd',
      ru: 'в',
    },
    shiftText: {
      en: 'D',
      ru: 'В',
    },
    code: 'KeyD',
  },
  {
    text: {
      en: 'f',
      ru: 'а',
    },
    shiftText: {
      en: 'F',
      ru: 'А',
    },
    code: 'KeyF',
  },
  {
    text: {
      en: 'g',
      ru: 'п',
    },
    shiftText: {
      en: 'G',
      ru: 'П',
    },
    code: 'KeyG',
  },
  {
    text: {
      en: 'h',
      ru: 'р',
    },
    shiftText: {
      en: 'H',
      ru: 'Р',
    },
    code: 'KeyH',
  },
  {
    text: {
      en: 'j',
      ru: 'о',
    },
    shiftText: {
      en: 'J',
      ru: 'О',
    },
    code: 'KeyJ',
  },
  {
    text: {
      en: 'k',
      ru: 'л',
    },
    shiftText: {
      en: 'K',
      ru: 'Л',
    },
    code: 'KeyK',
  },
  {
    text: {
      en: 'l',
      ru: 'д',
    },
    shiftText: {
      en: 'L',
      ru: 'Д',
    },
    code: 'KeyL',
  },
  {
    text: {
      en: ';',
      ru: 'ж',
    },
    shiftText: {
      en: ':',
      ru: 'Ж',
    },
    code: 'Semicolon',
  },
  {
    text: {
      en: "'",
      ru: 'э',
    },
    shiftText: {
      en: '"',
      ru: 'Э',
    },
    code: 'Quote',
  },
  {
    text: {
      en: 'Enter',
      ru: 'Enter',
    },
    shiftText: {
      en: 'Enter',
      ru: 'Enter',
    },
    code: 'Enter',
  },
  {
    text: {
      en: 'Shift',
      ru: 'Shift',
    },
    shiftText: {
      en: 'Shift',
      ru: 'Shift',
    },
    code: 'ShiftLeft',
  },
  {
    text: {
      en: 'z',
      ru: 'я',
    },
    shiftText: {
      en: 'Z',
      ru: 'Я',
    },
    code: 'KeyZ',
  },
  {
    text: {
      en: 'x',
      ru: 'ч',
    },
    shiftText: {
      en: 'X',
      ru: 'Ч',
    },
    code: 'KeyX',
  },
  {
    text: {
      en: 'c',
      ru: 'с',
    },
    shiftText: {
      en: 'C',
      ru: 'С',
    },
    code: 'KeyC',
  },
  {
    text: {
      en: 'v',
      ru: 'м',
    },
    shiftText: {
      en: 'V',
      ru: 'М',
    },
    code: 'KeyV',
  },
  {
    text: {
      en: 'b',
      ru: 'и',
    },
    shiftText: {
      en: 'B',
      ru: 'И',
    },
    code: 'KeyB',
  },
  {
    text: {
      en: 'n',
      ru: 'т',
    },
    shiftText: {
      en: 'N',
      ru: 'Т',
    },
    code: 'KeyN',
  },
  {
    text: {
      en: 'm',
      ru: 'ь',
    },
    shiftText: {
      en: 'M',
      ru: 'Ь',
    },
    code: 'KeyM',
  },
  {
    text: {
      en: ',',
      ru: 'б',
    },
    shiftText: {
      en: '<',
      ru: 'Б',
    },
    code: 'Comma',
  },
  {
    text: {
      en: '.',
      ru: 'ю',
    },
    shiftText: {
      en: '>',
      ru: 'Ю',
    },
    code: 'Period',
  },
  {
    text: {
      en: '/',
      ru: '.',
    },
    shiftText: {
      en: '?',
      ru: ',',
    },
    code: 'Slash',
  },
  {
    text: {
      en: '▲',
      ru: '▲',
    },
    shiftText: {
      en: '▲',
      ru: '▲',
    },
    code: 'ArrowUp',
  },
  {
    text: {
      en: 'Shift',
      ru: 'Shift',
    },
    shiftText: {
      en: 'Shift',
      ru: 'Shift',
    },
    code: 'ShiftRight',
  },
  {
    text: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
    shiftText: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
    code: 'ControlLeft',
  },
  {
    text: {
      en: 'Win',
      ru: 'Win',
    },
    shiftText: {
      en: 'Win',
      ru: 'Win',
    },
    code: 'MetaLeft',
  },
  {
    text: {
      en: 'Alt',
      ru: 'Alt',
    },
    shiftText: {
      en: 'Alt',
      ru: 'Alt',
    },
    code: 'AltLeft',
  },
  {
    text: {
      en: ' ',
      ru: ' ',
    },
    shiftText: {
      en: ' ',
      ru: ' ',
    },
    code: 'Space',
  },
  {
    text: {
      en: 'Alt',
      ru: 'Alt',
    },
    shiftText: {
      en: 'Alt',
      ru: 'Alt',
    },
    code: 'AltRight',
  },
  {
    text: {
      en: '◄',
      ru: '◄',
    },
    shiftText: {
      en: '◄',
      ru: '◄',
    },
    code: 'ArrowLeft',
  },
  {
    text: {
      en: '▼',
      ru: '▼',
    },
    shiftText: {
      en: '▼',
      ru: '▼',
    },
    code: 'ArrowDown',
  },
  {
    text: {
      en: '►',
      ru: '►',
    },
    shiftText: {
      en: '►',
      ru: '►',
    },
    code: 'ArrowRight',
  },
  {
    text: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
    shiftText: {
      en: 'Ctrl',
      ru: 'Ctrl',
    },
    code: 'ControlRight',
  },
];

class KeyBoard {
  constructor(keys, size, lang) {
    this.keys = keys;
    this.case = size;
    this.lang = lang;
    this.activeKeys = [];
  }

  static getSpecialBtnList() {
    return ['Backspace', 'Delete', 'Enter', 'ShiftLeft', 'ShiftRight', 'AltLeft', 'AltRight', 'ControlRight', 'ControlLeft', 'Tab', 'CapsLock', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'MetaLeft'];
  }

  switchLang() {
    this.lang = (this.lang === 'ru') ? 'en' : 'ru';
    localStorage.setItem('lang', this.lang);
  }

  switchCase() {
    this.case = (this.case === 'text') ? 'shiftText' : 'text';
  }

  render() {
    let htmlString = '';
    const keyboardPlace = document.getElementById('keyboard');
    this.keys.forEach((key) => {
      htmlString += `<div class="keyboard__key" id="${key.code}"">${key[this.case][this.lang]}</div>`;
    });
    keyboardPlace.innerHTML = htmlString;
    this.activateKeys();
    document.querySelectorAll('.keyboard__key').forEach((elem) => {
      elem.addEventListener('click', (event) => {
        const code = event.target.id;
        const keyboardInput = document.querySelector('textarea');
        if (!KeyBoard.getSpecialBtnList().includes(code)) {
          keyboardInput.value += this.getKeyValueByCode(code);
        }
        if (code === 'Backspace') {
          const newValue = keyboardInput.value.split('');
          newValue.pop();
          keyboardInput.value = newValue.join('');
        }
        if (code === 'Enter') {
          keyboardInput.value += '\r\n';
        }
      });
    });
  }

  activateKeys() {
    this.activeKeys.forEach((keyId) => document.getElementById(keyId).classList.add('keyboard__key-active'));
  }

  getKeyValueByCode(code) {
    let result;
    this.keys.forEach((key) => {
      if (key.code === code) {
        result = key[this.case][this.lang];
      }
    });

    return result;
  }
}

/* Render keyboard============================================================== */
function init() {
  document.body.innerHTML = `
    <div class="container">
        <div id="textarea"></div>
        <div id="keyboard"></div>
        <p class="paragraph">Клавиатура создана в операционной системе Windows </p>
        <p class="paragraph">Для переключения языка комбинация: shift + alt</p>
    </div>`;
}
init();

function renderTextArea() {
  const textContainer = document.getElementById('textarea');
  textContainer.innerHTML = '<textarea class="textarea"></textarea>';
}

renderTextArea();

const keyBoard = new KeyBoard(keysArr, switchCase, keyboardLang);
keyBoard.render();

/* Keyboard events============================================================== */

document.addEventListener('keydown', (event) => {
  keyBoard.activeKeys.push(event.code);
  if (event.code === 'ShiftLeft') {
    keyBoard.switchCase();
  }
  if (event.code === 'CapsLock') {
    keyBoard.switchCase();
  }
  keyBoard.render();
});

document.addEventListener('keyup', (event) => {
  const keyboardInput = document.querySelector('textarea');
  if (keyBoard.activeKeys.filter((code) => code === 'ShiftLeft' || code === 'AltLeft').length === 2) {
    keyBoard.switchLang();
  }
  if (event.code === 'ShiftLeft') {
    keyBoard.switchCase();
  }
  if (event.code === 'CapsLock') {
    keyBoard.switchCase();
  }
  if (event.code === 'Backspace') {
    const newValue = keyboardInput.value.split('');
    newValue.pop();
    keyboardInput.value = newValue.join('');
  }
  if (!KeyBoard.getSpecialBtnList().includes(event.code)) {
    keyboardInput.value += keyBoard.getKeyValueByCode(event.code);
  }
  if (event.code === 'Enter') {
    keyboardInput.value += '\r\n';
  }
  keyBoard.activeKeys = keyBoard.activeKeys.filter((code) => code !== event.code);
  keyBoard.render();
});
