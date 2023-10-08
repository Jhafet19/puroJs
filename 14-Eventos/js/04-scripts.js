const formulari=document.querySelector('#formulario')
formulari.addEventListener('submit',validarForm

)

function validarForm(e){
    e.preventDefault();


    console.log(e.target.method)
    console.log(e.target.action)

}