const btnCargarJson = document.querySelector("#cargarJSON");
const url = "data/empleado.json";
btnCargarJson.addEventListener("click", obtenerInfo);
function obtenerInfo() {
  fetch(url)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}
