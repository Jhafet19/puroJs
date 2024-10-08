const sin=Symbol();
const sin2=Symbol();

console.log(sin==sin2);

const nombre=Symbol();
const apellido=Symbol();

const persona={};

persona[nombre]='Juan'
persona[apellido]='rodrguez'

persona.tipoCliente='premium'
persona.saldo=3000

console.log(persona);