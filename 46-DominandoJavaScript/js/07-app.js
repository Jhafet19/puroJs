console.log('primero')

setTimeout(() => {
    console.log('segundo')
}, 0);

console.log('Tercero')

setTimeout(() => {
    console.log('Cuarto')
}, 0);

new Promise(function (resolve) {
    resolve('Desconocido')
}).then(res => console.log(res))

console.log('Ultimo')

function saludar() {
    console.log('Hola')
}
saludar()