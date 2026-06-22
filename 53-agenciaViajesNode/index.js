import express from 'express'
import router from "./routes/index.js";
import db from './config/db.js'



const app = express()

//Conectar a la base de Datos
db.authenticate()
    .then(() => console.log('Base de datos conectada con exito'))
    .catch((error) => console.log('Error al acceder a base de datos ', error))

const port = process.env.PORT || 4000

app.set('view engine', 'pug')


//Obetener el año actual
app.use((req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSito = 'Agencia de Viajes;'
    next()
})

//agregar BodyParser
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/', router)

app.listen(port, () => {
    console.log('El servidor esta escuchando el puerto ', port)
})