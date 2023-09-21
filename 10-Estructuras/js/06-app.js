const usuario=true;
const puedePagar=false;

if(usuario && puedePagar)
console.log("Si puedes pagar")
else if(!usuario){
console.log("No eres usuario")
}else if(puedePagar){
console.log("no tienes suficiente")
}
else 
console.log("No puedes pagar")