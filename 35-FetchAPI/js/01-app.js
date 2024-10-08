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
}