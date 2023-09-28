const carrito = [
    {nombre: `Monnitor`,precio:500},
    {nombre: `television`,precio:500},
    {nombre: `telefono`,precio:500},
    {nombre: `carro`,precio:100}
   
   ]
let resultado;
   resultado=carrito.filter(producto => producto.precio==100)
   console.table(resultado);

   resultado=carrito.filter(producto=> producto.precio>50)
   console.table(resultado);

   resultado=carrito.filter(producto=>producto.nombre!==`Monnitor`)
   console.table(resultado);
   resultado=carrito.filter(producto=>producto.nombre===`Monnitor`)
   console.table(resultado);
