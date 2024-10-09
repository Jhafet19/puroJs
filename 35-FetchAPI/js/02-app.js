<<<<<<< Updated upstream
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
=======
const jsonBtn = document.querySelector('#cargarJSON')
jsonBtn.addEventListener('click', obtenerJson)

function obtenerJson() {
    const url = 'data/empleado.json'

    fetch(url).then(res => {
        if (res.status) {
            return res.json()
        }
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}
>>>>>>> Stashed changes
