localStorage.removeItem('nombre');
//Actualizar un registro;
const mesesArray=JSON.parse(localStorage.getItem('producto'))
mesesArray.push('snbñosm');


localStorage.setItem('producto',JSON.stringify(mesesArray))