const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const registrosPorPagina = 40;
let totalPaginas = 0;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;
    if (terminoBusqueda === '') {
        mostrarAlerta("Agrega un termino de busqueda");
        return;
    }
    buscarImagenes(terminoBusqueda);

}


function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.bg-red-100');
    if (existeAlerta) {
        return;
    }

    const alerta = document.createElement('P');
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center')
    alerta.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline">${mensaje}</span>
    `;

    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}


function buscarImagenes(termino) {
    const apiKey = '42948955-fd588aaa1b0bb790e519301cb';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${termino}&per_page=100`;

    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            console.error('Error al obtener la respuesta');
        })
        .then(data => {
            totalPaginas = calcualarPaginas(data.totalHits)
            mostarImagenes(data.hits);

        })
        .catch(err => {
            console.error("Error al consultar api", err);
        })
}

function calcualarPaginas(total) {
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostarImagenes(imagenes) {
    while (resultado.firstChild) {
        resultado.firstChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;

        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4"  >
            <div class="bg-white" >
                <img class ="w-full" src="${previewURL}">
                <div class="p-4">
                    <p class="font-bold"> ${likes}<span class="font-light"> Me gusta</span> </p>
                    <p class="font-bold"> ${views}<span class="font-light"> Veces vista</span> </p>

                    <a href="${largeImageURL}" class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" target="_blank" rel="noopener norefererer"> Ver imagen</a>
                </div>
            </div>
        </div>
       `
    })

}
