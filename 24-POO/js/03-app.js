class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return ` Cliente ${this.nombre}, saldo ${this.saldo}`
    }

    static bienvenida() {
        return `Binevenido al cajero`
    }
}


//herencia en JavaScript
class Empresa extends Cliente {
    constructor(nombre, saldo, numero) {
        super(nombre, saldo)
        this.numero = numero
    }
    static bienvenida() {
        return `Binevenido al cajero de empresas`
    }
}

const jhaf = new Cliente('jhfet', 400);
const empresa = new Empresa('empresa', 300, 15564);

console.log(jhaf);
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
console.log(empresa);