/*Render keyboard==============================================================*/
(function () {
    document.body.innerHTML = `
    <div class="container">
        <div id="textarea"></div>
        <div id="keyboard"></div>
        <p class="paragraph">Клавиатура создана в операционной системе Windows </p>
        <p class="paragraph">Для переключения языка комбинация: shift + alt</p>
    </div>`;
})();

let lang = 'ru';
let swichCase = 'text';
let activeKeys = [];
function renderTextArea() {
    const textContainer = document.getElementById("textarea");
    textContainer.innerHTML = `<textarea class="textarea"></textarea>`;
}

renderTextArea()

function initKeyboard() {
    let htmlString = "";
    const keyboardPlace = document.getElementById("keyboard");

    for (let i = 0; i < keys.keys.length; i++) {
        htmlString += `<div class="keyboard__key" id="${keys.keys[i].code}">${keys.keys[i][swichCase][lang]}</div>`;
    }
    keyboardPlace.innerHTML = htmlString;
    activateKeys();
}

initKeyboard()

/*Language switcher==============================================================*/

function swichLanguage() {
    lang = (lang === 'ru') ? 'en' : 'ru';
}

function swichCaseHandler() {
    swichCase = (swichCase === 'text') ? 'shiftText' : 'text';
}

function activateKeys() {
    activeKeys.forEach(keyId => document.getElementById(keyId).classList.add('keyboard__key-active'))
}

/*Keyboard events==============================================================*/
document.addEventListener('keydown', (event) => {
    activeKeys.push(event.code);
    if (event.code === 'ShiftLeft') {
        swichCaseHandler()
    }
    initKeyboard();
})

document.addEventListener('keyup', (event) => {
    if (activeKeys.filter(code => code === 'ShiftLeft' || code === 'AltLeft').length === 2) {
        swichLanguage()
    }
    if (event.code === 'ShiftLeft') {
        swichCaseHandler()
    }
    activeKeys = activeKeys.filter(code => code !== event.code);
    initKeyboard();
})



