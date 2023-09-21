const reproductor ={
    //metodos de propiedad
    reproducir:(id)=>console.log(`Reproducindo una cancion con el id ${id}`)
    ,
    pausar:()=>console.log("Pausando"),
    //template String
    playlist:(cancion)=>console.log(`Reprodicindo la playlist de ${cancion}`)
    ,borrar:()=>console.log("Eliminando canacion"),
    set nuevaCancion(cancion){
        this.cancion=cancion;
        console.log(`añadiendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion="Loquesea"
reproductor.obtenerCancion;

reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar();
reproductor.playlist("rap")