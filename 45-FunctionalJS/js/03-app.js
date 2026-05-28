/*const suma = (a, b) => {
    return a + b;
}

const multiplicacion = (a, b) => a * b;

const sumarOMultiplicar = fn => fn(10, 20);
console.log("🚀 ~ sumarOMultiplicar ~ sumarOMultiplicar:", sumarOMultiplicar(suma))
console.log("🚀 ~ sumarOMultiplicar ~ sumarOMultiplicar:", sumarOMultiplicar(multiplicacion))

*/

const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 10 },
    { nombre: "Television 50 Pulgadas", precio: 20 },
    { nombre: "Producto 3", precio: 30 },
    { nombre: "Teclado 4", precio: 40 },
    { nombre: "Celular 5", precio: 50 },
    { nombre: "bocinas 6", precio: 60 },
    { nombre: "Laptop 7", precio: 70 },
];

const resultado = carrito.filter(product => {
    return product.precio > 30;
})
console.log("🚀 ~ resultado:", resultado)

const mayor400 = producti => {
    return producti.precio > 50;
}

const resultado2 = carrito.filter(mayor400);
console.log("🚀 ~ resultado2:", resultado2)
