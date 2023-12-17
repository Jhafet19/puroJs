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

const juan = new Cliente("Juan", 10000)

console.log(juan);
console.log(juan.tipoCliente());