 const paises=[];

 const nuevoPais=pais=> new Promise(resolve=>{
    setTimeout(() => {
        paises.push(pais);
        resolve(`agreagado ${pais}`)
    }, 3000);
 })

 nuevoPais('Alemania').then(res=>{
    console.log(res)
 })