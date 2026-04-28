const criptoMonedasSelect = document.querySelector('#criptomonedas')
const monedasSelect = document.querySelector('#moneda')
const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')
const objBuscqueda = {
    moneda: '',
    criptomoneda: ''
}

const obtenerCriptomonedas = criptoMonedas => new Promise(resolve => {
    resolve(criptoMonedas)
});

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
    formulario.addEventListener('submit', submitFormulario)
    criptoMonedasSelect.addEventListener('change', leerValor)
    monedasSelect.addEventListener('change', leerValor)
})

function consultarCriptomonedas() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
    fetch(url)
        .then(res => res.json())
        .then(data => obtenerCriptomonedas(data.Data)
        )
        .then(criptoMonedas => selectCriptomonedas(criptoMonedas))
        .catch(e => console.log(e))
}


function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;
        const option = document.createElement('option')
        option.value = Name;
        option.textContent = FullName
        criptoMonedasSelect.appendChild(option)
    })
}

function leerValor(e) {
    objBuscqueda[e.target.name] = e.target.value
}

function submitFormulario(e) {
    e.preventDefault();
    const { moneda, criptomoneda } = objBuscqueda
    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Ambos campos son obligatorios')
        return;
    }
    consultarAPI()

}

function mostrarAlerta(msg) {
    const existeError = document.querySelector('.error')
    if (!existeError) {
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('error')

        divMensaje.textContent = msg
        formulario.appendChild(divMensaje)
        setTimeout(() => {
            divMensaje.remove()
        }, 3000);
    }

}

function consultarAPI() {
    const { moneda, criptomoneda } = objBuscqueda
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    mostrarSpinner()
    fetch(url)
        .then(res => res.json())
        .then(data => {
            mostrarCotizacionHTML(data.DISPLAY[criptomoneda][moneda])

        })

}

function mostrarCotizacionHTML(cotizacion) {
    limpiarHtml()

    const { PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, LASTUPDATE } = cotizacion
    const precio = document.createElement('p')
    precio.classList.add('precio')
    precio.innerHTML = `El precio es:  <span> ${PRICE}</span>`

    const precioAlto = document.createElement('p')
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span></p>`

    const precioBajo = document.createElement('p')
    precioBajo.innerHTML = `<p>Precio más alto del día: <span>${LOWDAY}</span></p>`

    const ultimasHoras = document.createElement('p')
    ultimasHoras.innerHTML = `<p>Variación ultimas 24 horas: <span>${CHANGE24HOUR} %</span></p>`

    const ultimaActualizacion = document.createElement('p')
    ultimaActualizacion.innerHTML = `<p>Ultima Actualización: <span>${LASTUPDATE}</span></p>`


    resultado.appendChild(precio)
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}


function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}
/**
 * 
 * <div class="sk-chase">
  
</div>
 */

function mostrarSpinner() {
    limpiarHtml()
    const spinner = document.createElement('div')
    spinner.classList.add('sk-chase')

    spinner.innerHTML = `
    <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
    `
    resultado.appendChild(spinner)

}