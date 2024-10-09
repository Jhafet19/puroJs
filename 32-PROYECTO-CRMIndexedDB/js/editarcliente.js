(function () {
    let db;
    let idCliente;
    const nombreInput = document.querySelector('#nombre')
    const emaliInput = document.querySelector('#email')
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa')
    const formulario = document.querySelector('#formulario')
    document.addEventListener('DOMContentLoaded', () => {
        conectarDB()
        formulario.addEventListener('submit', actualizarCliente)

        //Obtiene los parametros de la URL
        const paremertorURL = new URLSearchParams(window.location.search)

        idCliente = paremertorURL.get('id');
        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }


        function obtenerCliente(id) {
            console.log(id)
            const transaction = db.transaction(['crm'], 'readwrite');
            const objectStore = transaction.objectStore('crm');
            const cliente = objectStore.openCursor();
            cliente.onsuccess = function (e) {
                const cursor = e.target.result;
                if (cursor) {
                    if (cursor.value.id === Number(id)) {
                        console.log(cursor.value)
                        llenarFormulario(cursor.value)
                    }
                    cursor.continue();

                }
            }
        }
        function conectarDB() {
            const abrirConexion = window.indexedDB.open('crm', 1)

            abrirConexion.onerror = function () {
                console.log("Hubo un error")
            }
            abrirConexion.onsuccess = function () {
                db = abrirConexion.result;
            }
        }

        function llenarFormulario(datosCliente) {
            const { nombre,  empresa,email, telefono, id } = datosCliente;

            nombreInput.value = nombre;
            emaliInput.value = email;
            telefonoInput.value = telefono;
            empresaInput.value = empresa
        }

        function actualizarCliente(e) {
            e.preventDefault();
            if (nombreInput.value === '' || emaliInput.value === '' || telefonoInput.value === '' || empresaInput.value === '') {
                imprimirAlerta('Todos los campos  son obligatorios', 'error')
            }
            const clienteActualizado = {
                nombre: nombreInput.value,
                email: emaliInput.value,
                empresa: empresaInput.value,
                telefono: telefonoInput.value,
                id: Number(idCliente)
            }
            const transaction = db.transaction(['crm'], 'readwrite');
            const objectStore = transaction.objectStore('crm')
            objectStore.put(clienteActualizado)


            transaction.oncomplete=function(){
                imprimirAlerta("editad correctamente")
            setTimeout(() => {
                window.location.href='index.html'
            }, 3000);
            
            }
            transaction.onerror=function(){
                console.log("hubo un error")
            }

        }

    })

})();

