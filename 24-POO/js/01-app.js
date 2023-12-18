class Cliente {
    constructor(nombre,saldo) {
        this.nombre=nombre;
        this.saldo=saldo;
    }

}
const jhaf = new Cliente('jhfet',400);
console.log(jhaf);

//Segunda forma
const Cliente2 = class {
    constructor(nombre,saldo) {
        this.nombre=nombre;
        this.saldo=saldo;
    }
}
const jhaf2 = new Cliente2('jhfet2',4002);
console.log(jhaf2);
