const busqueda=document.querySelector('.busqueda')

busqueda.addEventListener('keydown',(e)=>{
    console.log(e.target.value)

})
busqueda.addEventListener('keyup',()=>{
    console.log('soltaste')
})

busqueda.addEventListener('blur',()=>{
    console.log('afuera')
})
busqueda.addEventListener('copy',()=>{
    console.log('copiaste')
})
busqueda.addEventListener('paste',()=>{
    console.log('pegaste')
})

busqueda.addEventListener('cut',()=>{
    console.log('cortaste')
})