const enlace=document.createElement('a');
const a=document.createElement('h1');
a.textContent='probando'
a.style.color='white'

enlace.href='#'
enlace.textContent='Nuevo';
// enlace.target='_blank'
console.log(enlace.textContent)
console.log(enlace)

//seleccionar
const b=document.querySelector('h1');
console.log(b)
b.appendChild(a)
const navegacion =document.querySelector('.navegacion')
// navegacion.appendChild(enlace)

// enlace.onclick=miFuncion


// function miFuncion(){
//     alert('Diste Click')
// }

const p1=document.createElement('P')
const p2=document.createElement('P')
const p3=document.createElement('P')

p1.textContent='Concierto'
p1.classList.add('categoria','consierto')
p2.textContent='concierto'
p2.classList.add('titulo')

p3.textContent='800  por persona'
p3.classList.add('precio')

const div=document.createElement('div')

div.classList.add('info')
div.appendChild(p1)
div.appendChild(p2)
div.appendChild(p3)


const img=document.createElement('img')

img.src='img/hacer2.jpg'
const card=document.createElement('div')

card.classList.add('card')
card.appendChild(img)
card.appendChild(div)

console.log(card.children)
navegacion.insertBefore(enlace,navegacion.children[1])

const contenedor=document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)