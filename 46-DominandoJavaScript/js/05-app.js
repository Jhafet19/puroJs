//Explicit binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y Escuchor ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Juan',
}

const musicaFavorita = ['Rock', 'Pop']

pesona.call(informacion, musicaFavorita[0], musicaFavorita[1]) //Call 
persona.apply(informacion, musicaFavorita) //Apply 
const nuevaFuncion = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]) //Bind
nuevaFuncion();