const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;
  if (ciudad === "" || pais === "") {
    mostrarError("ambos campos son obligatorios");
    return;
  }


  consultarApi(ciudad,pais);

  console.log("Buscando clima");
  console.log("ciudad :", ciudad, " pais: ", pais);
}

function mostrarError(err) {
  console.log(err);
  const alerta = document.querySelector(".bg-red-100");
  if (!alerta) {
    const alerta = document.createElement("div");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "ronuded",
      "max-w-md",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${err}</span>
        `;
    container.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 5000);
  }
}

function consultarApi(ciudad,pais){
    const appId='883e93596885a7cfee77d45e0952d34f'
const url=``

}