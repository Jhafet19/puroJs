const suma = (a, b, c) => a + b + c;

const parcial = (a) => (b, c) => suma(a, b, c);

const primerNumero = parcial(5);
const resultado = primerNumero(10, 15)
console.log("🚀 ~ resultado:", resultado)
