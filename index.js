/*Render keyboard==============================================================*/
const keyContainer = document.createElement("div");
keyContainer.id = "keyboard1";
document.body.append(keyContainer)
const keyboardPlace = document.querySelector("#keyboard1");

function initKeyboard() {
    let htmlString = "";

    for (let i = 0; i < keys.keys.length; i++) {
        if( i == 14 || i == 29 || i == 42 || i == 54 ) {
            htmlString += `<div class="new-row"></div>`;
        }
        htmlString += `<div class="keyboard__key">${keys.keys[i].text.ru}</div>`;
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