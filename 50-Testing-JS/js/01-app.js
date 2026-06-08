
function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 10);
let esperado = 16;

if (resultado === esperado) {
    console.log("La prueba pasó correctamente");
} else {
    console.error("La prueba no pasó correctamente");
}