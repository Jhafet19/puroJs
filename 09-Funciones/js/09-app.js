const reproductor ={
    //metodos de propiedad
    reproducir:function(id){
        console.log(`Reproducindo una cancion con el id ${id}`)
    },
    pausar:function(){
console.log("Pausando")
    },
    //template String
    playlist:function(cancion){
        console.log(`Reprodicindo la playlist de ${cancion}`)
    }
}

reproductor.borrar=function(){
    console.log("Eliminando canacion")
}
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar();
reproductor.playlist("rap")