const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
   
}

//object Contructor

function Producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=true
}

const producto2=new Producto("Tablett",200);
console.log(producto2)