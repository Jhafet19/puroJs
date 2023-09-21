const pendiente=['Tarea','Comer','Proyectos'];


const automovil={
    modelo:'jetta',
    year:2004,
    motor:'4,4'
}

for(let p in pendiente){
    console.log(p)
    }

    for (let a in automovil){
        console.log(`${automovil[a]}`)
    }
    for(let [llave,valor] of Object.entries(automovil)){
console.log(valor)
    }