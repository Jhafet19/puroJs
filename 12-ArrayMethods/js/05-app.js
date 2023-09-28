const carrito = [
    {nombre: `Monnitor`,precio:500},
    {nombre: `television`,precio:500},
    {nombre: `telefono`,precio:500},
    {nombre: `carro`,precio:100}
   
   ]

   //For each
let resultado;
   carrito.forEach((producto,indice)=>{
    if(producto.nombre===`Monnitor`){
        resultado= carrito[indice]
    }
   })
   console.log(resultado)

   let res;

   res=carrito.find(producto => producto.nombre!==`Monnitor` )

   console.log(res)