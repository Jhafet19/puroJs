const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
    formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
    e.preventDefault();

    const ciudad = document.querySelector("#ciudad").value;
    const pais = document.querySelector("#pais").value;
    if (ciudad === "" || pais === "") {
        mostrarError("ambos campos son obligatorios");
        return;
    }


    consultarApi(ciudad, pais);

    console.log("Buscando clima");
    console.log("ciudad :", ciudad, " pais: ", pais);
}

function mostrarError(err) {
    console.log(err);
    const alerta = document.querySelector(".bg-red-100");
    if (!alerta) {
        const alerta = document.createElement("div");
        alerta.classList.add(
            "bg-red-100",
            "border-red-400",
            "text-red-700",
            "px-4",
            "py-3",
            "ronuded",
            "max-w-md",
            "max-w-md",
            "mx-auto",
            "mt-6",
            "text-center"
        );

        alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${err}</span>
        `;
        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
}

function consultarApi(ciudad, pais) {
    const appId = '883e93596885a7cfee77d45e0952d34f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
    spinner()

    fetch(url)
        .then(res => res.json())
        .then(data => {
            limpiarHtml()
            if (data.cod === '404') {
                mostrarError('Ciudad no encontrada')
                return
            }
            mostrarClima(data);
        })
}

function mostrarClima(data) {
    const { name, main: { temp, temp_max, temp_min } } = data

    const centigrados = kelvinCentigrados(temp)
    const max = kelvinCentigrados(temp_max)
    const min = kelvinCentigrados(temp_min)
    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados}&#8451;`;
    actual.classList.add('font-bold', 'text-6xl')

    const tempMaxima = document.createElement('p')
    tempMaxima.innerHTML = ` Max: ${max}&#8451;`
    tempMaxima.classList.add('text-xl')

    const tempMinima = document.createElement('p')
    tempMinima.innerHTML = ` Min: ${min}&#8451;`
    tempMinima.classList.add('text-xl')

    const nombreCiudad = document.createElement('p')
    nombreCiudad.textContent = `Clima en ${name}`
    nombreCiudad.classList.add('font-bold', 'text-2xl')

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white')
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv)


}

const kelvinCentigrados = (grados) => parseInt(grados - 273.15)


function limpiarHtml() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner() {
    limpiarHtml()
    const divSpinner = document.createElement('div')
    divSpinner.classList.add('sk-fading-circle')
    divSpinner.innerHTML = `
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
    `
    resultado.appendChild(divSpinner)
}
//https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}