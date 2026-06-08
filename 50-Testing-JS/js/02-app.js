
function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 10);
let esperado = 16;

expected(esperado).toBe(resultado);

resultado = suma(5, 9);
esperado = 14;

expected(esperado).toEqual(resultado);

function expected(esperado) {
    return {
        toBe(resultado) {
            if (resultado === esperado) {
                console.log("La prueba pasó correctamente");
            } else {
                console.error("La prueba no pasó correctamente");
            }
        
    },
        toEqual(resultado) {
        if (resultado == esperado) {
            console.log("La prueba pasó correctamente");
        } else {
            console.error("La prueba no pasó correctamente");
        }
    }
}}