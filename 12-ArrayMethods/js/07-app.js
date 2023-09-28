const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2=[`Agosto`,`Septiembre`]

let meses3=meses.concat(meses2);
console.log(meses3)

//spred operator

const resultado={...meses,...meses2}
console.log(resultado)