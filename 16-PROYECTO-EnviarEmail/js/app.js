 document.addEventListener('DOMContentLoaded',function () {
    

    //Elementos
    const inputEmail=document.querySelector('#email')
    const inputAsunto=document.querySelector('#asunto')
    const inputMensaje=document.querySelector('#mensaje')
    const formulario=document.querySelector('#formulario')
    inputEmail.addEventListener('blur',validar)

    inputAsunto.addEventListener('blur',validar)

    inputMensaje.addEventListener('blur',validar)

    function validar(e) {
        if(e.target.value.trim()===''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement)
            return; 
        }
        limpiarHTML(e.target.parentElement);

    }

    function mostrarAlerta(mensaje,referencia){
        limpiarHTML(referencia)

        const alerta=referencia.querySelector('.bg-red-600')
        if(alerta){
            alerta.remove()
        }


        const error=document.createElement('P');
        error.textContent=mensaje
        error.classList.add('bg-red-600','text-white','p-2','text-center')
        referencia.appendChild(error)


    }

    function limpiarHTML(referencia){
        const alerta=referencia.querySelector('.bg-red-600')
        if(alerta){
            alerta.remove();
        }
    }
 })