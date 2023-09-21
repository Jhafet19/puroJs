function sumar(a,b){
return a+b
}

const res=sumar(2,3)

console.log(res)

let total=0;
function agragarCarrito(precio){
return total+=precio
}

function calcularImpuesto(total){

    return total*1.15;
}

total=agragarCarrito(300)
total=agragarCarrito(300)
total=agragarCarrito(300)
const totalpagar=calcularImpuesto(total)

console.log(total)
console.log(totalpagar)