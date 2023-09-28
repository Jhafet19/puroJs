
const carrito = [
    {nombre: `Monnitor`,precio:500},
    {nombre: `television`,precio:500},
    {nombre: `telefono`,precio:500},
    {nombre: `carro`,precio:100}
   
   ]

   const resultado=carrito.every(producto=> producto.precio<1000)

   console.log(resultado)