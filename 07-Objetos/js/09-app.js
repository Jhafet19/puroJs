"use strict";

const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}

//Impide que se agreguen o eliminan pripiedades pero si se peuden modificar las llaces
Object.seal(producto);
producto.disponible=false;

// producto.imagen=".jpg";
// delete producto.precio;
console.log(producto.disponible)
console.log(Object.isSealed(producto))