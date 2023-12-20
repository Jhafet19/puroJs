//Variables
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul')

//eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
    formulario.addEventListener('submit', agregarGasto);
}

//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = []
    }
    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante();
    }
    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
        this.restante = this.presupuesto - gastado

        console.log(this.restante);
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }
    alerta(mensaje, tipo) {
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('text-center', 'alert')

        if (tipo === 'error') {
            divAlerta.classList.add('alert-danger')
        } else {
            divAlerta.classList.add('alert-success')
        }

        divAlerta.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divAlerta, formulario)

        setTimeout(() => {
            divAlerta.remove()
        }, 3000)
    }

    agregarGastoListado(gastos) {
        this.limpiarHtml();

        gastos.forEach(gasto => {

            const { cantidad, id, nombre } = gasto;

            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between aling-items-center'
            nuevoGasto.dataset.id = id;

            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad}</span>`


            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto')
            btnBorrar.innerHTML = 'borrar &times'
            nuevoGasto.appendChild(btnBorrar)

            gastoListado.appendChild(nuevoGasto)
        });
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante

    }

    comprobarPresupuesto(presupuestoOj) {
        const { presupuesto, restante } = presupuestoOj
        const restanteDiv = document.querySelector('.restante')
        if ((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-succes')

            restanteDiv.classList.add('alert-danger')
        }else if((presupuesto/2)>restante){
            restanteDiv.classList.remove('alert-succes')

            restanteDiv.classList.add('alert-warning')
        }

    }

    limpiarHtml() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild)
        }
    }
}

const ui = new UI();
let presupuesto
//funciones}

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?')

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) ||
        preguntarPresupuesto <= 0) {
        window, location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario)

    ui.insertarPresupuesto(presupuesto)

}
function agregarGasto(e) {
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (nombre === '' || cantidad === '') {
        ui.alerta('ambos campos son obligatorios', 'error');
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.alerta('cantidad no valida', 'error')
        return
    }

    const gasto = {
        nombre, cantidad, id: Date.now()
    }
    const { gastos, restante } = presupuesto

    ui.agregarGastoListado(gastos)

    presupuesto.nuevoGasto(gasto)
    ui.alerta('Gasto agregado correctamente', '')
    ui.actualizarRestante(restante)
    ui.comprobarPresupuesto(presupuesto);
    formulario.reset();


}

