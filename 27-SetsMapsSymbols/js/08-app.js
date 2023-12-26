const ciudades = ['londres', 'cdmx', 'mazatlan']
const ordenesCompra = new Set([132, 465, 714, 346])
const datos = new Map();

datos.set('nombre', 'jhafet')
datos.set('Profecion', 'DSM')

// for(let entry of ciudades.entries()){
//     console.log(entry);
// }

// for(let entry of ordenesCompra.entries()){
//     console.log(entry);
// }

// for(let values of ciudades.values()){
//     console.log(values);
// }

// for(let values of ordenesCompra.values()){
//     console.log(values);
// }

// for(let values of datos.values()){
//     console.log(values);
// }


// for (let key of ciudades.keys()) {
//     console.log(key);
// }
// for (let key of ordenesCompra.keys()) {
//     console.log(key);
// }
// for (let key of datos.keys()) {
//     console.log(key);
// }

for (let ciudad of ciudades){
    console.log(ciudad);
}

for (let ciudad of ordenesCompra){
    console.log(ciudad);
}

for (let ciudad of datos){
    console.log(ciudad);
}