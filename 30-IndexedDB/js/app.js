let DB
document.addEventListener('DOMContentLoaded', () => {
    crmDB();
    setTimeout(() => {
        crearCliente()
    }, 5000);
})

function crmDB() {
    let drmDB = window.indexedDB.open('crm', 1)

    drmDB.onerror = function () {
        console.log('hubo un error a la hora de crear la DB');
    }

    drmDB.onsuccess = function () {
        console.log("Base de datos creada");
        DB=drmDB.result
    }

    drmDB.onupgradeneeded = function (e) {
        const db = e.target.result

        const object = db.createObjectStore('crm', {
            keyPath: "crm",
            autoIncrement: true
        })

        object.createIndex('nombre', 'nombre', { unique: false })
        object.createIndex('email', 'email', { unique: true })
        object.createIndex('telefono', 'telefono', { unique: false })
    }
}

function crearCliente(){

    let transaction=DB.transaction(['crm'],'readwrite')

    transaction.oncomplete=function(){
        console.log("transaccion completada");
    }
    transaction.onerror=function(){
        console.log("hubo un error en la transaccion");
    }

    const object=transaction.objectStore('crm')
    const nuevoCliente={
        telefono:1234567,
        nombre:'jhafet',
        email:'correo'
    }

    const peticion=object.add(nuevoCliente)

    console.log(peticion);

}