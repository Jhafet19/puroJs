class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const funcionesPersona = {
    mostarInfomacion() {
        console.log(`Nombre: :p ${this.nombre} ${this.apellido}`);
    }
}

Object.assign(Persona.prototype, funcionesPersona);

const cliente = new Persona('Juan', 'Perez');

cliente.mostarInfomacion();