const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
}
//agreagr nuevas propiedades a algun objeto
producto.imagen=".jpg";
console.log(producto)

    //Eliminar informacion del objeto
delete producto.disponible;
console.log(producto)