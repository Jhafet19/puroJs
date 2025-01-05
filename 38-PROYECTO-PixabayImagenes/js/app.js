const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


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
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${termino}`;

    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            console.error('Error al obtener la respuesta')
        })
        .then(data => {
            mostarImagenes(data.hits);

        })
        .catch(err => {
            console.error("Error al consultar api", err)
        })
}

function mostarImagenes(imagenes) {
    console.log("🚀 ~ mostarImagenes ~ imagenes:", imagenes)

    while (resultado.firstChild) {
        resultado.firstChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {
        console.log("🚀 ~ mostarImagenes ~ imagen:", imagen);
       const {previewURL,likes,views,largeImageURL}= imagen;

       resultado.innerHTML += `
       <img class ="w-full" src="${previewURL}">
       `
    })

}
