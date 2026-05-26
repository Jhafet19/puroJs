function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('Clientes descargados...');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);

    })
}

//async await
const ejecutar = async () => {
    try {
        const respuesta = await descargarClientes();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();