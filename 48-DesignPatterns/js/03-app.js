// Singleton
let instancia = null
class Persona {
    constructor(nombre, apellido) {
        if (!instancia) {
            instancia = this;
            this.nombre = nombre;
            this.apellido = apellido;
        }
        return instancia;
    }
}

const persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

const persona2 = new Persona('Maria', 'Gomez');
console.log(persona2);
