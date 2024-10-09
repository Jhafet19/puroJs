const abrirBtn=document.querySelector('#abrir-pantalla-completa')
const salirBtn=document.querySelector('#salir-pantalla-completa')

abrirBtn.addEventListener('click',pantallaCompleta);
salirBtn.addEventListener('click',cerrarPantalla);

function pantallaCompleta(){
document.documentElement.requestFullscreen()
}

function cerrarPantalla(){
    document.exitFullscreen()

}