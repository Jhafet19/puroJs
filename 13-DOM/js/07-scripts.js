//cambiar el css de un documento

// const encabezado =document.querySelector('h1')
// console.log(encabezado.style)

// encabezado.style.backgroundColor='red'
// encabezado.style.fontFamily=''
// encabezado.style.textTransform='lowerrcase'

const card=document.querySelector('.card')
//añadir nuevas clases a un objeto
card.classList.add('Nueva','otra')
card.classList.remove('Nueva')
console.log(card.classList)