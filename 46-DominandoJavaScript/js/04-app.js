//Binding
const usuario = {
    nombre: 'Juan',
    edad: 20,
    infomarcion() {
        //implicit binding
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },
    mascota: {
        nombre: 'Firulais',
        raza: 'Labrador',
        informacion() {
            //implicit binding
            console.log(`Mi mascota se llama ${this.nombre} y es un ${this.raza}`);
        }
    }
}

usuario.infomarcion(); // Hola, mi nombre es Juan y tengo 20 años
usuarion.mascota.infomarcion()