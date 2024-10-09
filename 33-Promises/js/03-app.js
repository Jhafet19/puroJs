//Ppromises
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if (descuento) {
        resolve('descuento aplicado')
    } else {
        reject('no se puede aplicar descuento')
    }
})

aplicarDescuento.then(res => {
    console.log("🚀 ~ res:", res)

}).catch(err => {
    console.log("🚀 ~ err:", err)
})

//Estados
/**
 *Fulfilled el promised se cumpli
 REjected el promise no se cumplio
 Pending aun no sabemos 
 */ 