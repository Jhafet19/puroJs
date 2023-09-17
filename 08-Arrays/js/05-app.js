const meses=["Enero", "Febrero","Marzo"];
const carrito=[];




    function producto(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    const productor=new producto("monitor",400)
    const producto2=new producto("tablet",500)
    const producto3=new producto("teclado",100)
carrito.push(productor)
carrito.push(producto2)
//el metodo se usa para agregar un objeto en el inicio de la fila FIFO
carrito.unshift(producto3)

//agregar al fina del arreglo
meses.push("abril");
meses.push("mayo");
// console.table(meses)

console.table(carrito)