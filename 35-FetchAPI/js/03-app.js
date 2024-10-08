const btnCargarArray = document.querySelector("#cargarJSONArray");
btnCargarArray.addEventListener("click", getArray);
function getArray() {
  const url = "data/empleados.json";
  fetch(url)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      data.forEach(element => {
        console.log(element);
        
      });
    })
    .catch((err) => console.log(err));
}
