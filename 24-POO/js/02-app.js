class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return ` Cliente ${this.nombre}, saldo ${this.saldo}`
    }

    static bienvenida(){
        return `Binevenido al cajero`
    }
}


const jhaf = new Cliente('jhfet', 400);
console.log(Cliente.bienvenida());
console.log(jhaf);
console.log(jhaf.mostrarInformacion());