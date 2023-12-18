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
        console.log(this.gastos);
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad
        console.log(document.querySelector('#total'));
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
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto)

}
function agregarGasto(e) {
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (nombre === '' || cantidad === '') {
        console.log("ambos son obligatirios");
        ui.alerta('ambos campos son obligatorios', 'error');
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.alerta('cantidad no valida', 'error')
        return
    }

    const gasto = {
        nombre, cantidad, id: Date.now()
    }

    presupuesto.nuevoGasto(gasto)
    ui.alerta('Gasto agregado correctamente','')
    formulario.reset();
}

