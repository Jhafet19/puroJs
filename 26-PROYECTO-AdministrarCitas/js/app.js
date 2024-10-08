const nombreMascota = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')
const fomulario = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas')

let editando;

eventListenesr();
function eventListenesr() {
    nombreMascota.addEventListener('change', datosCita)
    propietarioInput.addEventListener('change', datosCita)
    telefonoInput.addEventListener('change', datosCita)
    fechaInput.addEventListener('change', datosCita)
    horaInput.addEventListener('change', datosCita)
    sintomasInput.addEventListener('change', datosCita)

    fomulario.addEventListener('submit', nuevaCita)

}

class Citas {

    constructor() {
        this.citas = []
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita]
        console.log(this.citas);
    }
    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id)
    }
    editarCita(citaACtual) {
        this.citas = this.citas.map(cita => cita.id === citaACtual.id ? citaACtual : cita)
    }
}
class UI {
    imprimiirAlerta(mensaje, tipo) {
        const div = document.createElement('div')
        div.classList.add('text-center', 'alert', 'd-block', 'col-12')

        if (tipo === 'error') {
            div.classList.add('alert-danger')
        } else {
            div.classList.add('alert-success')

        }
        div.textContent = mensaje;

        document.querySelector('#contenido').insertBefore(div, document.querySelector('.agregar-cita'))

        setTimeout(() => {
            div.remove()
        }, 3000)
    }
    imprimirCitas({ citas }) {
        this.limpiarHtml()
        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, sintomas, hora, id } = cita
            const divCIta = document.createElement('div')
            divCIta.classList.add('cita', 'p-3')

            divCIta.dataset.id = id;

            const mascotaParrafo = document.createElement('h2')
            mascotaParrafo.classList.add('card-tile', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;


            const propietarioParrafo = document.createElement('p')
            propietarioParrafo.innerHTML = ` <span class="font-weight-bolder"> Propietario:  </span> ${propietario} `


            const telefonoParrafo = document.createElement('p')
            telefonoParrafo.innerHTML = ` <span class="font-weight-bolder"> Telefono:  </span> ${telefono} `

            const fechaParrafo = document.createElement('p')
            fechaParrafo.innerHTML = ` <span class="font-weight-bolder"> Fecha:  </span> ${fecha} `

            const sintomasParrafo = document.createElement('p')
            sintomasParrafo.innerHTML = ` <span class="font-weight-bolder"> Sintomas:  </span> ${sintomas} `

            const horaParrafo = document.createElement('p')
            horaParrafo.innerHTML = ` <span class="font-weight-bolder"> Hora:  </span> ${hora} `

            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'mr-2');
            btnBorrar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          `

            btnBorrar.onclick = () => eliminarCita(id)


            const btnEditar = document.createElement('button')
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          `
            btnEditar.onclick = () => cargarCita(cita);

            //DivCita
            divCIta.appendChild(mascotaParrafo);
            divCIta.appendChild(propietarioParrafo);
            divCIta.appendChild(telefonoParrafo);
            divCIta.appendChild(fechaParrafo);
            divCIta.appendChild(sintomasParrafo);
            divCIta.appendChild(horaParrafo);
            divCIta.appendChild(btnBorrar);
            divCIta.appendChild(btnEditar);

            contenedorCitas.appendChild(divCIta)

        });
    }
    limpiarHtml() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI()
const administrar = new Citas();


const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    sintomas: '',
    hora: '',
}

function datosCita(e) {
    citaObj[e.target.name] = e.target.value

}

function nuevaCita(e) {
    e.preventDefault();

    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj

    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {

        ui.imprimiirAlerta('todos los campos son obligatorios', 'error')
        return;
    }
    if (editando) {
        ui.imprimiirAlerta('editado correctamente', '')
        administrar.editarCita({ ...citaObj })

        fomulario.querySelector('button[type="submit"]').textContent = 'CREAR CITA'
        editando = false

    } else {
        citaObj.id = Date.now()
        administrar.agregarCita({ ...citaObj })
        ui.imprimiirAlerta('agregado correctamente', '')

    }


    fomulario.reset();

    ui.imprimirCitas(administrar);
}
function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.fecha = '';
    citaObj.propietario = '';
    citaObj.sintomas = '';
    citaObj.hora = '';
    citaObj.telefono = '';
}

function eliminarCita(id) {
    administrar.eliminarCita(id);

    ui.imprimiirAlerta('Se elimino la cita correctamente', '')

    ui.imprimirCitas(administrar);

}

function cargarCita(cita) {

    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = citaObj
    nombreMascota.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    citaObj.mascota = mascota
    citaObj.propietario = propietario
    citaObj.fecha = fecha
    citaObj.telefono = telefono
    citaObj.sintomas = sintomas
    citaObj.hora = hora
    citaObj.id = id


    fomulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios'
    editando = true;

}