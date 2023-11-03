const cursos=document.querySelector('#lista-cursos'),
carrito=document.querySelector('#carrito'),
vaciarCarrito=document.querySelector('#vaciar-carrito'),
contenidoCarrito=document.querySelector('#lista-carrito tbody')
let articulosCarrito=[];
escucharClicks();

function escucharClicks(){
  cursos.addEventListener('click',agregarCurso);
  carrito.addEventListener('click',eliminarCurso)
  vaciarCarrito.addEventListener('click',()=>{
    articulosCarrito=[];
    eliminarHTML()
  })
}

//Funciones

function eliminarCurso(e){
if(e.target.classList.contains('borrar-curso')){
  const cursoId=e.target.getAttribute('data-id')
  articulosCarrito=articulosCarrito.filter(curso=>curso.id!==cursoId)
  console.log(articulosCarrito);
  llenarCarrito()
}

}

function agregarCurso(e){
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')){
    const infoCurso=e.target.parentElement.parentElement;
    leerDatos(infoCurso);
  }
}

function leerDatos(curso){
  dataCurso={
imagen:curso.querySelector('img').src,
nombre:curso.querySelector('h4').textContent,
precio:curso.querySelector('span').textContent, 
id:curso.querySelector('a').getAttribute('data-id'),
cantidad:1
  }
const existe=articulosCarrito.some(curso=>curso.id===dataCurso.id)
if (existe) {
  const cursos=articulosCarrito.map(curso=>{
    if(curso.id===dataCurso.id){
      curso.cantidad++;
      return curso;
    }else{
      return curso;
    }
  });
 articulosCarrito=[...cursos] 
}else{
  articulosCarrito=[...articulosCarrito,dataCurso]
}

console.log(articulosCarrito);
llenarCarrito();
}

function llenarCarrito(){

  eliminarHTML()
  articulosCarrito.forEach(curso=>{
    const row=document.createElement('tr');
    const {imagen,nombre,precio,cantidad,id}=curso;
    row.innerHTML=` 
    <td> <img src= "${imagen}" width="100"></td>
    <td>${nombre}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>
    <a href=# class="borrar-curso" data-id=${id}>X</a>
    </td>
    `
    contenidoCarrito.appendChild(row)
  })
}
function eliminarHTML(){
  while (contenidoCarrito.firstChild) {
  contenidoCarrito.removeChild(contenidoCarrito.firstChild)
  }
}