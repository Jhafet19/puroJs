const paises = []

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Nuevo pais agregado ${pais}`)
    callback();
}

function mostrarPaises() {
    console.log('pais')
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);

        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarPaises)
            }, 1000);
        }, 1000);
    }, 1000);




}

iniciarCallbackHell()