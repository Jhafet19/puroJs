const btnCargarApi = document.querySelector("#cargarAPI");
btnCargarApi.addEventListener("click", cargarAPI);

function cargarAPI() {
  const url = "data/empleados.json";
  fetch(url).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  })
  .then(data=>{
    console.log(data);
    
    cargarContenido(data)
  })
  .catch(err=>{
    console.log(err);
    
  })
}

function cargarContenido(data){
    const divContenido= document.querySelector('.contenido')
    let html=''
    data.forEach(element => {
        const {nombre,empresa,trabajo}=element;

        divContenido.innerHTML=`<p1>${nombre} </p1>`
    });
    
}
