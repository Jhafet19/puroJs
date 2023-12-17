function Cliente(nombre,apellid){
    this.apellid=apellid;
    this.nombre=nombre;
}

const juan=new Cliente("Juan","Garcia")

function formato(cliente){
    const {nombre,apellid}=cliente;

    return `El cliente ${nombre} ${apellid}`
}
console.log(formato(juan));