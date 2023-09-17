const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    informacion:{
       medidas:{
        peso:"1kg",
        medida:'1m'
           },
           fabricacion:{
            pais:"mexico"
           }
    }
}

console.log(producto);
const {nombre,informacion:{fabricacion},informacion:{fabricacion:{pais}}}=producto 
console.log(fabricacion)
console.log(pais)