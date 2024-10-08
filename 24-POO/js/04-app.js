class Cliente {
    #nombre;
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return ` Cliente ${this.#nombre}, saldo ${this.saldo}`
    }

    setNombre(nombre){
        this.#nombre=nombre
    }
    getNombre(){
        return this.#nombre;
    }

    static bienvenida() {
        return `Binevenido al cajero`
    }
}

const jhaf = new Cliente('jhfet', 400);
console.log(jhaf.mostrarInformacion());
// console.log(jhaf.mostrarInformacion());
console.log(jhaf.getNombre());