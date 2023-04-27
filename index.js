/*Render keyboard==============================================================*/
(function () {
    document.body.innerHTML = `
    <div class="container">
        <div id="textarea"></div>
        <div id="keyboard"></div>
    </div>`;

})();

function renderTextArea() {
    const textContainer = document.getElementById("textarea");
    textContainer.innerHTML = `<textarea class="textarea"></textarea>`;
}

renderTextArea()

function initKeyboard() {
    let htmlString = "";
    const keyboardPlace = document.getElementById("keyboard");

    for (let i = 0; i < keys.keys.length; i++) {
        if (i == 14 || i == 29 || i == 42 || i == 54) {
            htmlString += `<div class="new-row"></div>`;
        }
        htmlString += `<div class="keyboard__key" id="${keys.keys[i].code}">${keys.keys[i].text.ru}</div>`;
    }
    keyboardPlace.innerHTML = htmlString;
}

initKeyboard()

/*Language switcher==============================================================*/
let lang = 'ru';

function swichLanguage() {
    lang = (lang === 'ru') ? 'en' : 'ru';
    initKeyboard()
}

/*Keyboard events==============================================================*/
document.addEventListener('keydown', (event) => {
    const keyActive = document.getElementById(event.code)
    keyActive.classList.add('key-active')


})

