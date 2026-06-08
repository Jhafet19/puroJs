//Mediator
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null
}

Vendedor.prototype = {

    ofertar: function (articulo, precio) {
        console.log(`Tenemos el siguiente articulo ${articulo} e iniciamos con un precio de ${precio}`)
    },
    vendido: function (comprador, articulo) {
        console.log(`El articulo ${articulo} se ha vendido a ${comprador}`)
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    ofertar: function (cantidad, comprador) {
        console.log(`${comprador.nombre} : ${cantidad}`)
    }
}

function Subasta() {
    let compradores = [];
    return {
        registrar: function (usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }

}

const vendedor = new Vendedor('vendedor de Autos');
const pedro = new Comprador('Pedro');
const maria = new Comprador('Maria');
const subastea = new Subasta();

subastea.registrar(vendedor);
subastea.registrar(pedro);
subastea.registrar(maria);

vendedor.ofertar('Auto', 1000)
pedro.ofertar(1200, pedro)
maria.ofertar(1300, maria)
vendedor.vendido('Pablo', 'Auto')