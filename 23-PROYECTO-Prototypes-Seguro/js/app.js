function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
    const opccion = this.marca;

    let catidad;
    const base = 2000;
    switch (opccion) {
        case '1':
            catidad = base * 1.15
            break;
        case '2':
            catidad = base * 1.05
            break;
        case '3':
            catidad = base * 1.35
            break

        default:
            break;
    }
    const diferencia = new Date().getFullYear() - this.year;
    catidad -= ((diferencia * 3) * catidad) / 100

    if (this.tipo === 'basico') {
        catidad *= 1.30;
    } else {
        catidad *= 1.5
    }
    return catidad;
}
function UI() { }

UI.prototype.llenarOpcciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;
    const select = document.querySelector('#year');
    for (let index = max; index > min; index--) {
        let opccion = document.createElement('option');
        opccion.value = index;
        opccion.textContent = index;
        select.appendChild(opccion);
    }
}
UI.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement('div');
    if (tipo === 'error') {
        div.classList.add('mensaje', 'error')
    } else {
        div.classList.add('mensaje', 'correcto')
    }
    div.classList.add('mt-10');
    div.textContent = mensaje;

    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'))
    setTimeout(() => {
        div.remove()
    }, 3000)
}
UI.prototype.mosotrarResulatado = (seguro, total) => {
    const div = document.createElement('div');
    div.classList.add('mt-10')

    div.innerHTML = `<p class="header">Tu resumen</p>
    <p class="font-bold">Total ${total} </p>`

    resultadoDiv = document.querySelector('#resultado')

    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'block'
    setTimeout(() => {
        spinner.style.display = 'none'
        resultadoDiv.appendChild(div)

    }, 3000)
}
const ui = new UI()
document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpcciones()
})

eventListeners();

function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro)
}
function cotizarSeguro(e) {
    e.preventDefault();
    const marca = document.querySelector('#marca').value;
    if (marca == '') {

    }
    year = document.querySelector('#year').value;

    tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca == '' || year == '' || tipo == '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error')
    } else {
        ui.mostrarMensaje('Cotizando ...', 'exito')

        const resultado = document.querySelector('#resultado div')
        if(resultado!=null){
            resultado.remove()
        }
        const seguro = new Seguro(marca, year, tipo);
        const total = seguro.cotizarSeguro()

        ui.mosotrarResulatado(seguro, total)
    }
}