

let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente')
btnGuardarCliente.addEventListener('click', guardarCliente);


function guardarCliente() {

    const mesa = document.querySelector('#mesa').value
    const hora = document.querySelector('#hora').value

    //
    const camposVacios = [mesa, hora].some(campo => campo == '');
    if (camposVacios) {

        const existeAlerta = document.querySelector('.invalid-feedback')

        if (!existeAlerta) {
            const alerta = document.createElement('div');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta)
            setTimeout(() => {
                alerta.remove()
            }, 3000);
        }
        return;
    }

    cliente = { ...cliente, mesa, hora }


    const modalFormulario = document.querySelector('#formulario')
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide()

    mostrarSecciones()

    //obtenerPlatillos
    obtenerPlatillos()
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none')
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'))
}


function obtenerPlatillos() {
    const url = 'http://localhost:3000/platillos'
    fetch(url)
        .then(res => res.json())
        .then(data => mostrarPlatillos(data))
        .catch(error => console.error(error))
}

function mostrarPlatillos(platillos) {
    const contenido = document.querySelector('#platillos .contenido')
    platillos.forEach(platillo => {
        const row = document.createElement('div')
        row.classList.add('row', 'py-3', 'border-top')

        const nombre = document.createElement('div')
        nombre.classList.add('col-md-4')
        nombre.textContent = platillo.nombre

        const precio = document.createElement('DIV')
        precio.classList.add('col-md-3', 'fw-bold')
        precio.textContent = `$ ${platillo.precio}`

        const categoria = document.createElement('DIV')
        categoria.classList.add('col-md-3')
        categoria.textContent = categorias[platillo.categoria]

        const inputCantidad = document.createElement('input')
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');
        inputCantidad.value = 0;

        inputCantidad.onchange = function () {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({ ...platillo, cantidad })
        };

        const agregar = document.createElement('div')
        agregar.classList.add('col-md-2')
        agregar.appendChild(inputCantidad)


        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row)

    })

}


function agregarPlatillo(producto) {
    let { pedido } = cliente

    if (producto.cantidad > 0) {
        if (pedido.some(articulo => articulo.id === producto.id)) {

            const pedidoActualizado = pedido.map((articulo) => {
                if (articulo.id === producto.id) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            cliente.pedido = [...pedidoActualizado]
        } else {
            cliente.pedido = [...pedido, producto]
        }
    } else {
        const resultado = pedido.filter(articulo => articulo.id !== producto.id)
        cliente.pedido = [...resultado]
    }


    limpiarHTML()

    if (cliente.pedido.length) {
        actualizarResumen()

    } else {
        mensajePedidoVacio()
    }



}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido')
    const resumen = document.createElement('div')
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3');

    const mesa = document.createElement('p')
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold')

    const mesaSpan = document.createElement('span')
    mesaSpan.textContent = cliente.mesa
    mesaSpan.classList.add('fw-normal')

    const hora = document.createElement('p')
    hora.textContent = 'hora: ';
    hora.classList.add('fw-bold')

    const horaSpan = document.createElement('span')
    horaSpan.textContent = cliente.hora
    horaSpan.classList.add('fw-normal')

    hora.appendChild(horaSpan)
    mesa.appendChild(mesaSpan)

    //TIutulo
    const heading = document.createElement('h3')
    heading.textContent = 'Platillos Consumidos';
    heading.classList.add('my-4', 'text-center')

    //Iterar 

    const grupo = document.createElement('ul')
    grupo.classList.add('list-group')

    const { pedido } = cliente;
    pedido.forEach(articulo => {

        const { nombre, cantidad, precio, id } = articulo;
        const lista = document.createElement('li')
        lista.classList.add('list-group-item')

        const nombreEl = document.createElement('h4')
        nombreEl.classList.add('my-5')
        nombreEl.textContent = nombre

        const cantidaEL = document.createElement('p')
        cantidaEL.classList.add('fw-bold')
        cantidaEL.textContent = 'Cantidad: ';


        const cantidadValor = document.createElement('span')
        cantidadValor.classList.add('fw-normal')
        cantidadValor.textContent = cantidad


        const precioEL = document.createElement('p')
        precioEL.classList.add('fw-bold')
        precioEL.textContent = 'Precio: ';


        const precioValor = document.createElement('span')
        precioValor.classList.add('fw-normal')
        precioValor.textContent = `$ ${precio}`

        //Subtotal
        const subtotalEL = document.createElement('p')
        subtotalEL.classList.add('fw-bold')
        subtotalEL.textContent = 'Subtotal: ';


        const subtotalValor = document.createElement('span')
        subtotalValor.classList.add('fw-normal')
        subtotalValor.textContent = precio * cantidad

        //BotonEliminar
        const btnEliminar = document.createElement('button')
        btnEliminar.classList.add('btn', 'btn-danger')
        btnEliminar.textContent = 'Eliminar del Pedido'
        btnEliminar.onclick = function () {
            eliminarProducto(id)
        }

        cantidaEL.appendChild(cantidadValor)
        precioEL.appendChild(precioValor)
        subtotalEL.appendChild(subtotalValor)

        lista.appendChild(nombreEl)
        lista.appendChild(cantidaEL)
        lista.appendChild(precioEL)
        lista.appendChild(subtotalEL)
        lista.appendChild(btnEliminar)

        grupo.appendChild(lista)
    })


    resumen.appendChild(heading)
    resumen.appendChild(hora)
    resumen.appendChild(mesa)
    resumen.appendChild(grupo)

    contenido.appendChild(resumen)

    //MostrarFormulario
    formularioPropinas()
}
function limpiarHTML() {

    const contenido = document.querySelector('#resumen .contenido')
    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild)
    }
}

function eliminarProducto(id) {
    const { pedido } = cliente
    const resultado = pedido.filter(articulo => articulo.id !== id)
    cliente.pedido = [...resultado]

    limpiarHTML()

    if (cliente.pedido.length) {
        actualizarResumen()
    } else {
        mensajePedidoVacio()
    }
    //
    const productoEliminado = `#producto-${id}`
    const inputEliminado = document.querySelector(productoEliminado)
    inputEliminado.value = 0;

}

function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido')
    const texto = document.createElement('p')
    texto.classList.add('text-center')
    texto.textContent = 'Añade los elementos del pedido'
    contenido.appendChild(texto)

}

function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido')
    const formulario = document.createElement('div')
    const divFormulario = document.createElement('div')
    formulario.classList.add('col-md-6', 'formulario', 'card', 'py-4', 'px-3', 'shadow')
    divFormulario.classList.add('card', 'py-5', 'px-3', 'shadow')

    const heading = document.createElement('h3', 'text-center')
    heading.classList.add('my-4')
    heading.textContent = 'Propina'

    const radio10 = document.createElement('input')
    radio10.type = 'radio'
    radio10.name = 'propina';
    radio10.value = "10";
    radio10.classList.add('form-check-input')
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('label')
    radio10Label.textContent = '10%'
    radio10Label.classList.add('form-check-label')

    const radio10Div = document.createElement('div')
    radio10Div.classList.add('form-check')

    radio10Div.appendChild(radio10)
    radio10Div.appendChild(radio10Label)

    const radio25 = document.createElement('input')
    radio25.type = 'radio'
    radio25.name = 'propina';
    radio25.value = "25";
    radio25.classList.add('form-check-input')
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('label')
    radio25Label.textContent = '25%'
    radio25Label.classList.add('form-check-label')

    const radio25Div = document.createElement('div')
    radio25Div.classList.add('form-check')

    radio25Div.appendChild(radio25)
    radio25Div.appendChild(radio25Label)


    const radio50 = document.createElement('input')
    radio50.type = 'radio'
    radio50.name = 'propina';
    radio50.value = "50";
    radio50.classList.add('form-check-input')
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('label')
    radio50Label.textContent = '50%'
    radio50Label.classList.add('form-check-label')

    const radio50Div = document.createElement('div')
    radio50Div.classList.add('form-check')

    radio50Div.appendChild(radio50)
    radio50Div.appendChild(radio50Label)


    divFormulario.appendChild(heading)
    divFormulario.appendChild(radio10Div)
    divFormulario.appendChild(radio25Div)
    divFormulario.appendChild(radio50Div)

    formulario.appendChild(divFormulario)

    contenido.appendChild(formulario)


}

function calcularPropina() {

    let subtotal = 0;
    const { pedido } = cliente

    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio
    })
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value
    const propina = (subtotal * parseInt(propinaSeleccionada) / 100)


    const total = subtotal + propina
    mostrarTotalHTML(subtotal, propina, total)


}

function mostrarTotalHTML(subtotal, propina, total) {

    const divTotales = document.createElement('div')
    divTotales.classList.add('total-pagar')

    const subtotalParrafo = document.createElement('p')
    subtotalParrafo.classList.add('fs-3', 'fw-bold', 'mt-5')
    subtotalParrafo.textContent = `Subtotal: `

    const subtotalSpnan = document.createElement('span')
    subtotalSpnan.classList.add('fw-normal')
    subtotalSpnan.textContent = `$${subtotal}`

    subtotalParrafo.appendChild(subtotalSpnan)

    //propina
      const propinaParrafo = document.createElement('p')
    propinaParrafo.classList.add('fs-3', 'fw-bold', 'mt-5')
    propinaParrafo.textContent = `Propina: `

    const propinaSpan = document.createElement('span')
    propinaSpan.classList.add('fw-normal')
    propinaSpan.textContent = `$${propina}`

  
    propinaParrafo.appendChild(propinaSpan)

    //total a pagar

const totalParrafo = document.createElement('p')
    totalParrafo.classList.add('fs-3', 'fw-bold', 'mt-5')
    totalParrafo.textContent = `Total a pagar: `

    const totalSpan = document.createElement('span')
    totalSpan.classList.add('fw-normal')
    totalSpan.textContent = `$${total}`

    totalParrafo.appendChild(totalSpan)

    //eliminar el ultimo resultado
    const totalpagarDiv = document.querySelector('.total-pagar')
    if (totalpagarDiv) {
        totalpagarDiv.remove()
    }

    divTotales.appendChild(subtotalParrafo)
    divTotales.appendChild(propinaParrafo)
    divTotales.appendChild(totalParrafo)
    const formulario = document.querySelector('.formulario')
    formulario.appendChild(divTotales)
}
