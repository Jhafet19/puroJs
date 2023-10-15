//la mayoria de los selectores
const carrito = document.querySelector("#carrito"),
  listaCursos = document.querySelector("#lista-cursos"),
  contenedorCarrito = document.querySelector("#lista-carrito tbody"),
  vaciarCarrito = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

registarEventListeners();
function registarEventListeners() {
  listaCursos.addEventListener("click", agrgarCurso);

  carrito.addEventListener('click',eliminarCurso);
  vaciarCarrito.addEventListener('click',()=>{
    articulosCarrito=[];
    limpiarHTML();
})
}

//funciones
function agrgarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatos(cursoSeleccionado);
  }
}

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
    const cursoId=e.target.getAttribute('data-id')
    articulosCarrito=articulosCarrito.filter(curso =>curso.id!==cursoId)
    console.log(articulosCarrito)
    carritoHTML();
    }

}

function leerDatos(curso) {
  const infocurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector("span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  const existe=articulosCarrito.some(curso=>curso.id===infocurso.id)
if(existe){
const cursos=articulosCarrito.map(curso=>{
    if(curso.id===infocurso.id){
        curso.cantidad++
        return curso;
    }else{
        return curso;
    }
});
articulosCarrito=[...cursos]
}else{
    articulosCarrito = [...articulosCarrito, infocurso];
}
    console.log(articulosCarrito);
    carritoHTML();
}
function carritoHTML() {
    limpiarHTML();

  articulosCarrito.forEach(curso => {
    const row = document.createElement("tr");
    const{imagen,titulo,precio,cantidad,id}=curso;
    row.innerHTML = `
    <td><img src="${imagen}" width="100" > </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
        <a href="#" class="borrar-curso" data-id =${id}>X</a>
        </td>
        `;

        contenedorCarrito.appendChild(row);
  });
}

function limpiarHTML(){
    contenedorCarrito.innerHTML='';
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}