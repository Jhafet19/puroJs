//coersion es la conversion de un tipo de dato a otro tipo de dato, es decir, es la capacidad de JavaScript para convertir un valor de un tipo de dato a otro tipo de dato, ya sea de forma implícita o explícita.

const numero1 = 20;
const numero2 = "40";

//coersion implicita
const resultado = numero1 + numero2;
console.log(resultado); // 2040

//coersion explicita
const resultado2 = numero1 + Number(numero2);
console.log(resultado2); // 60

const pedido = [1, 2, 3]
console.log(pedido.toString()); // "1,2,3"|