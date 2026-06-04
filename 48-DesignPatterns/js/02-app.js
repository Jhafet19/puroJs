// Constructor Pattern

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

class Cliente extends Persona {
    constructor(nombre, apellido, telefono) {
        super(nombre, apellido);
        this.telefono = telefono;
    }
}

const cliente = new Cliente('Juan', 'Perez', '555-555-5555');
console.log(cliente); 