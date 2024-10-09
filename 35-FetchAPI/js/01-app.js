<<<<<<< Updated upstream
const cargarTexBtn = document.querySelector('#cargarTxt')

cargarTexBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    fetch('data/datos.txt')
    .then(res=>{
        return res.text();
    })
    .then(data=>console.log(data)
    ).catch(err=>console.log(err)
    )
=======
const cargarTextBtn = document.querySelector('#cargarTxt');
cargarTextBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    fetch('data/datos.txt').then(
        res => {
            console.log(res)
            if (res.status) {
                return res.text()

            }
        }
    ).then(datos => {
        console.log(datos)
    }
    )
        .catch(err => { console.log(err) })
>>>>>>> Stashed changes
}