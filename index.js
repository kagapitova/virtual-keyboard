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

let activeKeys = [];

function renderTextArea() {
    const textContainer = document.getElementById("textarea");
    textContainer.innerHTML = `<textarea class="textarea"></textarea>`;
}
renderTextArea()

const keyBoard = new KeyBoard(keyArr, swichCase, lang);
keyBoard.render();


/*Keyboard events==============================================================*/

document.addEventListener('keydown', (event) => {
    keyBoard.activeKeys.push(event.code);
    if (event.code === 'ShiftLeft') {
        keyBoard.switchCase()
    }
    if (event.code === 'CapsLock') {
        keyBoard.switchCase()
    }
    keyBoard.render();
})

document.addEventListener('keyup', (event) => {
    const keyboardInput = document.querySelector('textarea');
    if (activeKeys.filter(code => code === 'ShiftLeft' || code === 'AltLeft').length === 2) {
        keyBoard.switchLang()
    }
    if (event.code === 'ShiftLeft') {
        keyBoard.switchCase()
    }
    if (event.code === 'CapsLock') {
        keyBoard.switchCase()
    }
    if (event.code === "Backspace") {
        const newValue = keyboardInput.value.split('')
        newValue.pop()
        keyboardInput.value = newValue.join('')
    }
    if (!Key.getSpecialBtns().includes(event.code)) {
        keyboardInput.value += keyBoard.getKeyValueByCode(event.code);
    }
    if (event.code === "Enter") {
        keyboardInput.value += '\r\n'
    }
    keyBoard.activeKeys = keyBoard.activeKeys.filter(code => code !== event.code);
    keyBoard.render();
})

function keyClickHandler(code) {
    const keyboardInput = document.querySelector('textarea');
    if (!Key.getSpecialBtns().includes(code)) {
        keyboardInput.value += keyBoard.getKeyValueByCode(code);
    }
    if (code === "Backspace") {
        const newValue = keyboardInput.value.split('')
        newValue.pop()
        keyboardInput.value = newValue.join('')
    }
    if (code === "Enter") {
        keyboardInput.value += '\r\n'
    }
}

