function* crearGenerador() {
    yield 1;
    yield 'jhafet';
    yield 3 + 3;
    yield true;
}

const i = crearGenerador()
// console.log(i);

function* generadorCarrit(carrito) {
for (let i = 0; i < carrito.length; i++) {
    yield carrito[i]
    
}
}
const carrito = ['pdt1', 'pdt 2', 'pdt3'];

const ite = generadorCarrit(carrito);

console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());