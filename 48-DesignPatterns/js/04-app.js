// Factory Pattern

class InputHTML {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }
    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    }
}

class HTMLFactory {
    crearElemento(type, nombre) {
        switch (type) {
            case 'text':
                return new InputHTML(type, nombre);
            case 'email':
                return new InputHTML(type, nombre);
            case 'password':
                return new InputHTML(type, nombre);
            default:
                throw new Error('Tipo de elemento no soportado');
        }
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento('text', 'username');
const inputEmail = elemento.crearElemento('email', 'email');
const inputPassword = elemento.crearElemento('password', 'password');

console.log(inputText.crearInput());
console.log(inputEmail.crearInput());
console.log(inputPassword.crearInput());