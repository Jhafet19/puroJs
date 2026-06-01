function Auto(modelo, color) {
    this.modelo = modelo
    this.color = color
}

const auto = new Auto("Mustang", "Rojo");

//Window binding
window.color = "Azul"
function hola() {
    console.log(color)
}