const nav=document.querySelector('.navegacion')
//registrar un evento

// nav.addEventListener('click',()=>{
//     console.log('CLick en nav')
// })
 
nav.addEventListener('mouseenter',()=>{
    console.log('entrando')
  nav.style.backgroundColor='red'
})

nav.addEventListener('mouseout',()=>{
    console.log('Saliendo')
    nav.style.backgroundColor='transparent'
})

nav.addEventListener('mousedown',()=>{
    console.log('entrando')

})

