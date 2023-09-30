const encabezado=document.querySelector('.contenido-hero h1')
console.log(encabezado)

//no encuentra los elementos con visility hidden
console.log(encabezado.innerText)
//este si encuentra el texto
console.log(encabezado.textContent)
//optiene el html
console.log(encabezado.innerHTML)

document.querySelector('.contenido-hero h1').textContent='Nuevo'

const imagen =document.querySelector('.card img')
//siempre necesitaras un src por que estas intentando acceder a un objeto
imagen.src='img/hacer2.jpg';

