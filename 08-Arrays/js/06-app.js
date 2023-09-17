const carrito=[];


function producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
}

const productor=new producto("monitor",400)
const producto2=new producto("tablet",500)
const producto3=new producto("teclado",100)

//funcionen declaratica e imperativa
let resultado;
resultado = [...carrito, producto2]

console.table(carrito)
console.log(resultado)