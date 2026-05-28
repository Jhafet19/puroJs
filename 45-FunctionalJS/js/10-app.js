const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Mi nombre es ${info.nombre}`);
    }
})


const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Mi empresa es ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Mi puesto es ${info.puesto}`);
    }
})
const guardarEmail = info => {
    return {
        agregarEmail(email) {
            console.log("🚀 ~ guardarEmail ~ email:", info.nombre)
            info.email = email;
        }
    };
}

function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmpresa(info)
    )

}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerPuesto(info)

    )
}


const cliente = new Cliente('jhafet', 'cliente@gmail.com', 'google');
cliente.mostrarNombre()
cliente.mostrarEmpresa()
cliente.agregarEmail('')



const empleado = new Empleado('jhafet', 'empleado@gmail.com', 'desarrollador');
empleado.mostrarNombre()
empleado.mostrarPuesto()
empleado.agregarEmail('')