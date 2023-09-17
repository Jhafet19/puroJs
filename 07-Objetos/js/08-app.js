"use strict";

const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}
//freeze me impide realizar modificaciones a un objeto
Object.freeze(producto);
 console.log(producto)
console.log(Object.isFrozen(producto))