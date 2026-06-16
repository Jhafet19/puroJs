import express from 'express'
import router from "./routes/index.js";


const app = express()
const port = process.env.PORT || 4000

app.set('view engine', 'pug')


//Obetener el año actual
app.use((req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSito='Agencia de Viajes;'
    next()
})

app.use(express.static('public'))

app.use('/', router)

app.listen(port, () => {
    console.log('El servidor esta escuchando el puerto ', port)
})