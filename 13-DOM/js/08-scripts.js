const navegacion = document.querySelector(".navegacion");
// console.log(navegacion);
//obtine los elemnetos en blanco que se convierten en elementos
//saltos de linea

// console.log(navegacion.childNodes)
// console.log(navegacion.children[0])

//con children nevegamos desde el padre hacia los hijos
const card = document.querySelector(".card");
// console.log(card.children[1].children)
// console.log(card.children[1].children[1].textContent='Probando el chlidren')

const img = document.querySelector(".card");

// console.log(img.children[0].src='img/hacer3.jpg')

//nevegar del hijo hacia el padre

// console.log(card.parentNode);
// console.log(card.parentElement.parentElement);
// console.log(card.parentElement.parentElement.pa);

//seleccionar hermanos hacia adelante
// console.log(card.nextElementSibling)
// console.log(card.nextElementSibling.nextElementSibling)


const ultimo = document.querySelector(".card:nth-child(4)");
console.log(ultimo.previousElementSibling);

