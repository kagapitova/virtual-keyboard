class Key {
    constructor({text,shiftText,code}) {
        this.text = text;
        this.shiftText = shiftText;
        this.code = code;
    }

    static getSpecialBtns() {
        return ["Backspace", "Delete", "Enter", "ShiftLeft", "ShiftRight", "AltLeft", "AltRight", "ControlRight", "ControlLeft", "Tab", "CapsLock", "ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp", "MetaLeft"];
    }

    getCode(){
        return this.code
    }

    getValue(lang, size){
       return this[size][lang]
    }
    getHtml(lang, size) {
        return `<div class="keyboard__key" id="${this.getCode()}" onclick="keyClickHandler('${this.getCode()}')">${this.getValue(lang, size)}</div>`;
    }
}

