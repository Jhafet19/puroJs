// const cliente = 'Juan'

// function mostrarCliente() {
//     console.log(cliente)
// }

// mostrarCliente()

//scope
const login = true;

function clienteLogueado() {

    const cliente = 'juan'
    console.log(cliente)
    if (login) {
        const cliente = 'admin'
        console.log(cliente)
    }
}