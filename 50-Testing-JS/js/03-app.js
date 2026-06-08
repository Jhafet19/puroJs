
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

async function sumaAsync(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }
            , 1000);
    })
};
let resultado = suma(5, 10);
let esperado = 16;

expected(esperado).toBe(resultado);

async function testSumaAsync() {
    try {
        let resultado = await sumaAsync(5, 10);
        let esperado = 15;
        expected(esperado).toBe(resultado);
        resultado = await sumaAsync(5, 10);
        esperado = 15;
        expected(esperado).toBe(resultado);
    } catch (error) {
        console.error("La prueba no pasó correctamente");
    }

}

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
    }
}