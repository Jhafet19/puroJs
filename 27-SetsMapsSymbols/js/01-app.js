const carrito=new Set();
carrito.add('camisa')
carrito.add('disco n1')
carrito.add('disco n2')
carrito.add('disco n1')

console.log(   carrito.has('camisa'));
console.log(carrito.size);
carrito.forEach(product=>{
    console.log(product);
})

console.log(carrito);


const arr=[10,20,30,40,50,50,40]

const noD=new Set(arr);

console.log(noD);