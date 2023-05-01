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

let lang = ( localStorage.getItem('lang') === 'ru'|| 'en') ? localStorage.getItem('lang') : 'ru';
let swichCase = 'text';
let activeKeys = [];
const arrSpecialBtn = ["Backspace", "Delete", "Enter", "ShiftLeft", "ShiftRight", "AltLeft", "AltRight", "ControlRight", "ControlLeft", "Tab", "CapsLock", "ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp","MetaLeft"];

function renderTextArea() {
    const textContainer = document.getElementById("textarea");
    textContainer.innerHTML = `<textarea class="textarea"></textarea>`;
}

renderTextArea()

function initKeyboard() {
    let htmlString = "";
    const keyboardPlace = document.getElementById("keyboard");
    for (let i = 0; i < keys.keys.length; i++) {
        htmlString += `<div class="keyboard__key" id="${keys.keys[i].code}" onclick="keyClickHandler('${keys.keys[i].code}')">${keys.keys[i][swichCase][lang]}</div>`;
    }
    keyboardPlace.innerHTML = htmlString;
    activateKeys();
}

initKeyboard()

function keyClickHandler(keyCode){
    const keyboardInput = document.querySelector('textarea');
    if (!arrSpecialBtn.includes(keyCode)) {
        keyboardInput.value +=  getKeyValue(keyCode)
    }
    if(keyCode === "Backspace"){
       const newValue =  keyboardInput.value.split('')
        newValue.pop()
        keyboardInput.value = newValue.join('')
    }
}
/*Language and case switcher==============================================================*/

function swichLanguage() {
    lang = (lang === 'ru') ? 'en' : 'ru';
    localStorage.setItem('lang',lang);
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
    if (event.code === 'CapsLock') {
        swichCaseHandler()
    }
    initKeyboard();
})

document.addEventListener('keyup', (event) => {
    const keyboardInput = document.querySelector('textarea');
    if (activeKeys.filter(code => code === 'ShiftLeft' || code === 'AltLeft').length === 2) {
        swichLanguage()
    }
    if (event.code === 'ShiftLeft') {
        swichCaseHandler()
    }
    if (event.code === 'CapsLock') {
        swichCaseHandler()
    }
    if(event.code === "Backspace"){
        const newValue =  keyboardInput.value.split('')
        newValue.pop()
        keyboardInput.value = newValue.join('')
    }
    if (!arrSpecialBtn.includes(event.code)) {
        keyboardInput.value += getKeyValue(event.code);
    }
    activeKeys = activeKeys.filter(code => code !== event.code);
    initKeyboard();
})

function getKeyValue(code) {
    for (let i = 0; i < keys.keys.length; i++) {
        if (code === keys.keys[i].code) {
            return keys.keys[i][swichCase][lang]
        }
    }
}

