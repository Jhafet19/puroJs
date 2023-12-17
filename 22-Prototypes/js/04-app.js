function Cliente(nombre, saldo) {
    this.saldo = saldo;
    this.nombre = nombre;
}
Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'gold'
    } else if (this.saldo > 5000) {
        tipo = 'platino'
    } else {
        tipo = 'normal'
    }
    return tipo

}

function Persona(nombre,saldo,telefono){
    Cliente.call(this,nombre,saldo);
    this.telefono=telefono
}

Persona.prototype=Object.create(Cliente.prototype)
Persona.prototype.constructor=Cliente;
const jona=new Persona("jonatan",2000,777)
console.log(jona.tipoCliente());