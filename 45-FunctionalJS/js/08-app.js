
const cliente = 'Juan'

function mostrarCliente() {
    const cliente = 'Pedro'
    function mostrarNombre() {
        console.log(cliente)
    }
    return mostrarNombre
}

const cliente = mostrarCliente();

cliente()