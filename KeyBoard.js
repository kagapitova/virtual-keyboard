class KeyBoard {
    constructor(keys, size, lang) {
        this.keys = keys;
        this.case = size;
        this.lang = lang;
        this.activeKeys = [];
    }

    switchLang() {
        this.lang = (this.lang === 'ru') ? 'en' : 'ru';
        localStorage.setItem('lang', this.lang);
    }

    switchCase() {
        this.case = (this.case === 'text') ? 'shiftText' : 'text';
    }

    render() {
        let htmlString = "";
        const keyboardPlace = document.getElementById('keyboard');
        this.keys.forEach(key => {
            htmlString += key.getHtml(this.lang, this.case);
        })
        keyboardPlace.innerHTML = htmlString;
        this.activateKeys();
    }

    activateKeys() {
        this.activeKeys.forEach(keyId => document.getElementById(keyId).classList.add('keyboard__key-active'))
    }

    getKeyValueByCode(code) {
        let result;
        this.keys.forEach(key => {
            if (key.getCode() === code) {
                result = key.getValue(keyBoard.lang, keyBoard.case)
            }
        })

        return result;
    }
}