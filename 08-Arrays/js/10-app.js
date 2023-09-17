const carrito=[
    {nombre:'Monitor ',precio:500},
    {nombre:'celular ',precio:200},
    {nombre:'tablet ',precio:15},
    {nombre:'Teclado ',precio:150},
    {nombre:'Television ',precio:400},
    {nombre:'Monitor ',precio:500},
]


carrito.forEach(function(producto){
    console.log(`${producto.nombre} - --- Precio: ${producto.precio}`)    

})

carrito.map(function(producto){
    console.log(`${producto.nombre} - --- Precio: ${producto.precio}`)    

})


//map crea un arreglo nuevo