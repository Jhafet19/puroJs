const carrito = [
 {nombre: `Monnitor`,precio:500},
 {nombre: `television`,precio:500},
 {nombre: `telefono`,precio:500},
 {nombre: `carro`,precio:500}

]
console.log(carrito)

let total=0;

carrito.forEach(producto=>total+= producto.precio);
console.log(total)

let resultado=carrito.reduce((total,producto)=> total+producto.precio,0)
console.log(resultado)