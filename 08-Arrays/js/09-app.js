const carrito=[
    {nombre:'Monitor ',precio:500},
    {nombre:'celular ',precio:200},
    {nombre:'tablet ',precio:15},
    {nombre:'Teclado ',precio:150},
    {nombre:'Television ',precio:400},
    {nombre:'Monitor ',precio:500},
]

for (let index = 0; index < carrito.length; index++) {
console.log(`${carrito[index].nombre} - Precio: ${carrito[index].precio}`)    
}

carrito.forEach(function(producto){
    console.log(`${producto.nombre} - --- Precio: ${producto.precio}`)    

})