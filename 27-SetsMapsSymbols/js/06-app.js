//crear iteradores

const carrito = ['pdt1', 'pdt2', 'pdt3']

function crearItereador(carrito) {

    let indice = 0;
    return {
        siguiente: () => {
            let fin=(indice>=carrito.length)
            let valor= !fin? carrito[indice++]:undefined;
            return{
                fin,
                valor
            }
        }
    }
}

const recorrer=crearItereador(carrito);

console.log(recorrer.siguiente());
console.log(recorrer.siguiente());
console.log(recorrer.siguiente());
console.log(recorrer.siguiente());