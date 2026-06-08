const restaurantApp = {}

restaurantApp.platillos = [
    {
        platillo: "Tacos al pastor",
        precio: 50
    },
    {
        platillo: "Hamburguesa",
        precio: 20
    },
    {
        platillo: "Hot Dog",
        precio: 50
    },
]

restaurantApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log('Bienvenidos a nuestro menú')
        platillos.forEach((platillo, index) => {
            console.log(`${index + 1}. ${platillo.platillo}: $${platillo.precio}`)
        })
    },
    ordenar: id => {
        console.log(`Tu platillo ${restaurantApp.platillos[id].platillo} ha sido ordenado`)
    },
    agregarPlatillo: (platillo, precio) => {
        restaurantApp.platillos.push({ platillo, precio })
        console.log(`El platillo ${platillo} ha sido agregado al menú`)
    }
}

restaurantApp.funciones.ordenar(0)

restaurantApp.funciones.agregarPlatillo('Pizza', 100)

restaurantApp.funciones.mostrarMenu(restaurantApp.platillos)