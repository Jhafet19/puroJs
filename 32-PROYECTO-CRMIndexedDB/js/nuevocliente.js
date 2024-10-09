(function () {
    let db;
    const formulario = document.querySelector('#formulario')
    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        formulario.addEventListener('submit', validarCliente);
    })


    function validarCliente(e) {
        e.preventDefault();
        //leer inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if (nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('todos los campos son obligatorios', 'error')
        }
        //esto es gracias a el objetc literel
        const cliente = {
            id: Date.now(),
            nombre,
            email,
            telefono,
            empresa
        }
        crearNuevoCliente(cliente);
    }

    
    function crearNuevoCliente(cliente) {
        const transaction = db.transaction(['crm'], 'readwrite');
        const objetStore = transaction.objectStore('crm');
        objetStore.add(cliente)

        transaction.onerror = () => {
            console.log('Hubo un error');
            imprimirAlerta("El correo ya se a registrado","error")
        }
        transaction.oncomplete = () => {
            imprimirAlerta("El cliente se creo de forma exitosa")
            setTimeout(() => {
                window.location.href='index.html'
            }, 2000);
        }
    }
})();