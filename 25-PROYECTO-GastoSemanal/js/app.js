//Variables
const formulario=document.querySelector('#agregar-gasto');
const gastoListado= document.querySelector('#gastos ul')

//eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto)
}


//funciones}
console.log("asdasd");

function preguntarPresupuesto(){
    const presupuestoUsuario=prompt('¿Cual es tu presupuesto?')

    console.log(presupuestoUsuario);
}

