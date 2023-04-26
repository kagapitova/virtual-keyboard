const keyboardPlace = document.querySelector("#keyboard");

function initKeyboard() {
    let htmlString = "";

    for (let i = 0; i < keys.keys.length; i++) {
        if( i == 14 || i == 29 || i == 42 || i == 54 ) {
            htmlString += `<div class="new-row"></div>`;
        }
        htmlString += `<div class="keyboard__key">${keys.keys[i].code}</div>`;
    }
    keyboardPlace.innerHTML = htmlString;
}

initKeyboard()