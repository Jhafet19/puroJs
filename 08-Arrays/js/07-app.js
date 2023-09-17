const carrito=[];
function producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
}

const productor=new producto("monitor",400)
const producto2=new producto("tablet",500)
const producto3=new producto("teclado",100)
const producto4=new producto("celular",200)
carrito.push(productor);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);

console.table(carrito)

//eliminar ultimo objeto del arreglo
carrito.pop();

console.table(carrito)
//Eliminar al comienzo del arrleglo
carrito.shift()

console.table(carrito)

//Eliminar a la mitad
carrito.splice(1,1);
console.table(carrito);
